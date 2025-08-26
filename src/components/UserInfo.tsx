"use client";

import { useStaticUserInfo, useLiveTime, useLiveBattery } from "@/hooks/useUserInfo";

interface UserInfoProps {
  className?: string;
  showTime?: boolean;
  showSystem?: boolean;
  showScreen?: boolean;
  showConnection?: boolean;
  showBattery?: boolean;
}

export const LiveUserInfo = () => {
    const currentTime = useLiveTime();
    const currentBatteryInfo = useLiveBattery();
    return (
        <div className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-foreground">Time</h3>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Current Time:</span>
                <span className="font-mono">{currentTime}</span>
              </div>
            </div>
            <h3 className="text-sm font-mono font-bold text-foreground">Battery Status</h3>
            <div className="space-y-1 text-xs text-muted-foreground">
                {currentBatteryInfo && (
                    <>
                        <div className="flex justify-between">
                            <span>Level:</span>
                            <span className="font-mono">{Math.round(currentBatteryInfo.level * 100)}%</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="font-mono">{currentBatteryInfo.charging ? "Charging" : "Discharging"}</span>
                        </div>
                        {currentBatteryInfo.charging && currentBatteryInfo.chargingTime !== Infinity && (
                            <div className="flex justify-between">
                            <span>Time to Full:</span>
                            <span className="font-mono">{Math.round(currentBatteryInfo.chargingTime / 60)} min</span>
                            </div>
                        )}
                        {!currentBatteryInfo.charging && currentBatteryInfo.dischargingTime !== Infinity && (
                            <div className="flex justify-between">
                            <span>Time Remaining:</span>
                            <span className="font-mono">{Math.round(currentBatteryInfo.dischargingTime / 60)} min</span>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export const UserInfo = ({ 
  className = "",
  showTime = true,
  showSystem = true,
  showScreen = true,
  showConnection = true,
  showBattery = true,
}: UserInfoProps) => {
  const { userInfo, isLoading, error } = useStaticUserInfo();
  //console.log(currentTime);
  //console.log(currentBatteryInfo);
  console.log(userInfo);

  if (isLoading) {
    return (
      <div className={`p-4 border border-border rounded-lg bg-background ${className}`}>
        <div className="text-sm text-muted-foreground">Loading user info...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-4 border border-border rounded-lg bg-background ${className}`}>
        <div className="text-sm text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className={`p-4 border border-border rounded-lg bg-background ${className}`}>
        <div className="text-sm text-muted-foreground">No user info available</div>
      </div>
    );
  }

  return (
    <div className={`p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm ${className}`}>
      <div className="space-y-3">
        {showTime && (
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-foreground">Time & Location</h3>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Current Time:</span>
                <span className="font-mono">{userInfo.time}</span>
              </div>
              <div className="flex justify-between">
                <span>Timezone:</span>
                <span className="font-mono">{userInfo.timezone}</span>
              </div>
            </div>
          </div>
        )}

        {showSystem && (
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-foreground">System</h3>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Language:</span>
                <span className="font-mono">{userInfo.language}</span>
              </div>
              <div className="flex justify-between">
                <span>Browser:</span>
                <span className="font-mono">{userInfo.browser}</span>
              </div>
              <div className="flex justify-between">
                <span>OS:</span>
                <span className="font-mono">{userInfo.os}</span>
              </div>
            </div>
          </div>
        )}

        {showScreen && (
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-foreground">Display</h3>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Resolution:</span>
                <span className="font-mono">{userInfo.screen.width} × {userInfo.screen.height}</span>
              </div>
              <div className="flex justify-between">
                <span>Color Depth:</span>
                <span className="font-mono">{userInfo.screen.colorDepth} bit</span>
              </div>
              <div className="flex justify-between">
                <span>Pixel Ratio:</span>
                <span className="font-mono">{userInfo.screen.pixelRatio}x</span>
              </div>
            </div>
          </div>
        )}

        {showConnection && (
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-foreground">Connection</h3>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Type:</span>
                <span className="font-mono">{userInfo.connection.effectiveType}</span>
              </div>
              <div className="flex justify-between">
                <span>Downlink:</span>
                <span className="font-mono">{userInfo.connection.downlink} Mbps</span>
              </div>
              <div className="flex justify-between">
                <span>RTT:</span>
                <span className="font-mono">{userInfo.connection.rtt} ms</span>
              </div>
              {userInfo.connection.saveData && (
                <div className="flex justify-between">
                  <span>Data Saver:</span>
                  <span className="font-mono">Enabled</span>
                </div>
              )}
            </div>
          </div>
        )}

        {showBattery && (
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-foreground">Battery</h3>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Level:</span>
                <span className="font-mono">{Math.round(userInfo.battery.level * 100)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="font-mono">{userInfo.battery.charging ? "Charging" : "Discharging"}</span>
              </div>
              {userInfo.battery.charging && userInfo.battery.chargingTime !== Infinity && (
                <div className="flex justify-between">
                  <span>Time to Full:</span>
                  <span className="font-mono">{Math.round(userInfo.battery.chargingTime / 60)} min</span>
                </div>
              )}
              {!userInfo.battery.charging && userInfo.battery.dischargingTime !== Infinity && (
                <div className="flex justify-between">
                  <span>Time Remaining:</span>
                  <span className="font-mono">{Math.round(userInfo.battery.dischargingTime / 60)} min</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo; 