interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContainerWrapper({ children, className = "" }: ContainerWrapperProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
} 