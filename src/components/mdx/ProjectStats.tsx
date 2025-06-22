interface Stat {
  label: string;
  value: string | number;
  unit?: string;
}

interface ProjectStatsProps {
  stats: Stat[];
  title?: string;
}

export default function ProjectStats({ stats, title = "Project Statistics" }: ProjectStatsProps) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {stat.value}
              {stat.unit && <span className="text-sm text-blue-500 ml-1">{stat.unit}</span>}
            </div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 