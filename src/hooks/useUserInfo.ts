import { useState, useEffect } from "react";

interface BatteryInfo {
    level: number;
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
}

interface UserInfoData {
    time: string;
    timezone: string;
    language: string;
    browser: string;
    os: string;
    screen: {
        width: number;
        height: number;
        colorDepth: number;
        pixelRatio: number;
    };
    connection: {
        effectiveType: string;
        downlink: number;
        rtt: number;
        saveData: boolean;
    };
    battery: BatteryInfo;
}

interface UseUserInfoOptions {
    updateInterval?: number; // in milliseconds
}

export const useLiveTime = (options: UseUserInfoOptions = {}) => {
    const { updateInterval = 1000 } = options;
    const [currentTime, setCurrentTime] = useState<string>("");
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        };
        updateTime();
        const timeInterval = setInterval(updateTime, updateInterval);
        return () => clearInterval(timeInterval);
    }, [updateInterval]);
    return currentTime;
};

export const useLiveBattery = (options: UseUserInfoOptions = {}) => {
    const { updateInterval = 60000 } = options;
    const [currentBatteryInfo, setCurrentBatteryInfo] = useState<BatteryInfo | null>(null);
    useEffect(() => {
        const updateBattery = async () => {
            if ("getBattery" in navigator) {
                try {
                    const battery = await (navigator as any).getBattery();
                    const batteryInfo = {
                        level: battery.level,
                        charging: battery.charging,
                        chargingTime: battery.chargingTime,
                        dischargingTime: battery.dischargingTime,
                    };
                    setCurrentBatteryInfo(batteryInfo);
                } catch (error) {
                    console.warn("Battery API not available");
                }
            }
        };

        updateBattery();
        const batteryInterval = setInterval(updateBattery, updateInterval);
        return () => clearInterval(batteryInterval);
    }, [updateInterval]);
    return currentBatteryInfo;
};


export const useStaticUserInfo = () => {
    const [userInfo, setUserInfo] = useState<UserInfoData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUserInfo = async (): Promise<UserInfoData> => {
            try {
                // Time and timezone
                const now = new Date();
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                // Language
                const language = navigator.language;

                // Browser and OS detection
                const userAgent = navigator.userAgent;
                let browser = "Unknown";
                let os = "Unknown";

                if (userAgent.includes("Chrome")) browser = "Chrome";
                else if (userAgent.includes("Firefox")) browser = "Firefox";
                else if (userAgent.includes("Safari")) browser = "Safari";
                else if (userAgent.includes("Edge")) browser = "Edge";

                if (userAgent.includes("Windows")) os = "Windows";
                else if (userAgent.includes("Mac")) os = "macOS";
                else if (userAgent.includes("Linux")) os = "Linux";
                else if (userAgent.includes("Android")) os = "Android";
                else if (userAgent.includes("iOS")) os = "iOS";

                // Screen info
                const screen = {
                    width: window.screen.width,
                    height: window.screen.height,
                    colorDepth: window.screen.colorDepth,
                    pixelRatio: window.devicePixelRatio,
                };

                // Connection info
                const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
                const connectionInfo = {
                    effectiveType: connection?.effectiveType || "Unknown",
                    downlink: connection?.downlink || 0,
                    rtt: connection?.rtt || 0,
                    saveData: connection?.saveData || false,
                };

                // Battery info
                let batteryInfo = {
                    level: 0,
                    charging: false,
                    chargingTime: 0,
                    dischargingTime: 0,
                };

                if ("getBattery" in navigator) {
                    try {
                        const battery = await (navigator as any).getBattery();
                        batteryInfo = {
                            level: battery.level,
                            charging: battery.charging,
                            chargingTime: battery.chargingTime,
                            dischargingTime: battery.dischargingTime,
                        };
                    } catch (error) {
                        console.warn("Battery API not available");
                    }
                }

                return {
                    time: now.toLocaleTimeString(),
                    timezone,
                    language,
                    browser,
                    os,
                    screen,
                    connection: connectionInfo,
                    battery: batteryInfo,
                };
            } catch (err) {
                throw new Error("Failed to gather user information");
            }
        };

        const initializeUserInfo = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const info = await getUserInfo();
                setUserInfo(info);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setIsLoading(false);
            }
        };

        initializeUserInfo();
    }, []);

    return {
        userInfo,
        isLoading,
        error,
    };
}; 