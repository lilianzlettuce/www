import { UserInfo, LiveUserInfo } from "@/components/UserInfo";

export default function UserInfoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">User Info Component</h1>
          <p className="text-muted-foreground">Display local user information using the useUserInfo hook. Each section can be toggled independently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Full User Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Complete Info</h2>
            <UserInfo />
          </div>

          {/* Live Stats */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Live Stats</h2>
            <LiveUserInfo />
          </div>

          {/* Display & Connection */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Display & Connection</h2>
            <UserInfo 
              showTime={false}
              showSystem={false}
              showBattery={false}
            />
          </div>
        </div>

        <div className="mt-12 p-6 border border-border rounded-lg bg-background/50">
          <h2 className="text-xl font-bold text-foreground mb-4">Usage Examples</h2>
          <div className="space-y-4 text-sm text-muted-foreground font-mono">
            <div>
              <h3 className="font-bold text-foreground mb-2">Basic Usage:</h3>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`<UserInfo />`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-2">Custom Sections:</h3>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`<UserInfo 
  showTime={true}
  showSystem={true}
  showScreen={false}
  showConnection={false}
  showBattery={false}
/>`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-2">Custom Update Interval:</h3>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`<UserInfo 
  updateInterval={2000} // 2 seconds
  showTime={true}
/>`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-2">Custom Styling:</h3>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`<UserInfo 
  className="bg-accent/20 border-accent"
  showBattery={true}
/>`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 border border-border rounded-lg bg-background/50">
          <h2 className="text-xl font-bold text-foreground mb-4">Hook Usage</h2>
          <div className="space-y-4 text-sm text-muted-foreground font-mono">
            <div>
              <h3 className="font-bold text-foreground mb-2">Direct Hook Usage:</h3>
              <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`import { useUserInfo } from "@/hooks/useUserInfo";

const MyComponent = () => {
  const { userInfo, currentTime, isLoading, error } = useUserInfo({
    updateInterval: 1000
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <p>Current time: {currentTime}</p>
      <p>Browser: {userInfo?.browser}</p>
      <p>OS: {userInfo?.os}</p>
    </div>
  );
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 