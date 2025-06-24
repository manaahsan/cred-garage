import { useTheme } from 'next-themes';
import { TooltipProps } from 'recharts';

export const CustomTooltip = ({ active, payload, label }: TooltipProps<string, number>) => {
  const { theme } = useTheme();

  if (active && payload && payload.length) {
    const backgroundColor = theme === 'dark' ? '#1f2937' : '#ffffff'; 
    const textColor = theme === 'dark' ? '#f9fafb' : '#111827';   
    const borderColor = theme === 'dark' ? '#374151' : '#e5e7eb';  

    return (
      <div
        style={{
          backgroundColor,
          color: textColor,
          border: `1px solid ${borderColor}`,
          padding: '10px',
          borderRadius: '6px',
        }}
      >
        <p className="label">{label}</p>
        {payload.map((item, index) => (
          <p key={index}>
            {String(item.name).charAt(0).toUpperCase() + String(item.name).slice(1)}: ${item.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};
