"use client"

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { 
  IconBrandYoutubeFilled, 
  IconCode, 
  IconBrain, 
  IconRocket,
  IconCloud,
  IconChartLine,
  IconShield,
  IconApi,
  IconGitBranch,
  IconTestPipe
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI-Powered Code Generation",
      description: "Generate production-ready code with advanced AI models that understand context and best practices.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
      icon: <IconCode className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Neural Network Deployment",
      description: "Seamlessly deploy trained models to production with automated scaling and monitoring.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
      icon: <IconBrain className="h-6 w-6 text-purple-500" />
    },
    {
      title: "ML Pipeline Automation",
      description: "End-to-end automation of machine learning workflows from data ingestion to model serving.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
      icon: <IconGitBranch className="h-6 w-6 text-green-500" />
    },
    {
      title: "Global AI Infrastructure",
      description: "Deploy your AI models across global data centers with latency-based routing and automatic failover.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
      icon: <IconCloud className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "Performance Analytics",
      description: "Real-time monitoring and analytics for your AI models with detailed performance metrics.",
      skeleton: <SkeletonFive />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
      icon: <IconChartLine className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2 compliance, encryption, and access controls for your AI systems.",
      skeleton: <SkeletonSix />,
      className: "col-span-1 lg:col-span-3 dark:border-neutral-800",
      icon: <IconShield className="h-6 w-6 text-red-500" />
    },
  ];
  
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white"
        >
          AI Engineering Platform
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
        >
          Everything you need to build, deploy, and scale AI applications. From neural networks to production pipelines, 
          our platform handles the infrastructure so you can focus on innovation.
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mt-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-6 xl:border rounded-2xl dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              className={feature.className}
              index={index}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 mr-3">
                  {feature.icon}
                </div>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </div>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full mt-4">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
  index
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(`p-6 sm:p-8 relative overflow-hidden group hover:bg-gray-50/50 dark:hover:bg-neutral-800/20 transition-all duration-300`, className)}
    >
      {children}
    </motion.div>
  );
};

const FeatureTitle = ({
  children
}) => {
  return (
    <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white">
      {children}
    </h3>
  );
};

const FeatureDescription = ({
  children
}) => {
  return (
    <p className={cn(
      "text-sm text-neutral-600 dark:text-neutral-400",
      "text-left max-w-sm"
    )}>
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-4 gap-10 h-48">
      <div className="w-full p-4 mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl shadow-sm group h-full">
        <div className="flex w-full h-full flex-col space-y-2">
          <div className="bg-white dark:bg-neutral-800 rounded-md p-2 flex-1 overflow-hidden">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400">
              <div className="animate-pulse">def train_model(data):</div>
              <div className="animate-pulse ml-4"># AI-generated training code</div>
              <div className="animate-pulse ml-4">return optimized_model</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-16 bg-blue-200 dark:bg-blue-700 rounded-full"></div>
            <div className="h-2 w-24 bg-blue-200 dark:bg-blue-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const models = [
    { name: "ResNet", color: "bg-purple-400" },
    { name: "BERT", color: "bg-purple-500" },
    { name: "GPT-4", color: "bg-purple-600" },
    { name: "YOLO", color: "bg-purple-700" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-48 p-4">
      <div className="flex flex-col items-center">
        <div className="flex mb-4">
          {models.map((model, idx) => (
            <motion.div
              key={model.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`${model.color} h-8 w-8 rounded-full -ml-2 first:ml-0 flex items-center justify-center text-white text-xs`}
            >
              {model.name[0]}
            </motion.div>
          ))}
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 shadow-md">
          <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
            Deploying models...
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  const pipelineSteps = ["Data", "Process", "Train", "Evaluate", "Deploy"];
  
  return (
    <a
      href="https://youtu.be/demo"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col items-center justify-center h-48 group"
    >
      <div className="flex w-full justify-between items-center mb-6">
        {pipelineSteps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-xs font-medium">
                {index + 1}
              </div>
              <div className="text-xs mt-2 text-green-600 dark:text-green-400">{step}</div>
            </div>
            {index < pipelineSteps.length - 1 && (
              <div className="h-0.5 flex-1 bg-green-100 dark:bg-green-900/30 mx-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
        <div className="text-sm text-green-700 dark:text-green-400">Automated ML Pipeline</div>
      </div>
    </a>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-96 w-screen md:w-auto flex ml-[-8vw] md:ml-0 items-center justify-center">
      <Globe className="w-full  h-full" />
    </div>
  );
};

export const SkeletonFive = () => {
  return (
    <div className="h-48 flex items-center justify-center p-4">
      <div className="w-full bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-end justify-between h-24 mb-2">
          {[40, 60, 80, 60, 90, 70, 100].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: index * 0.1 }}
              className="w-6 bg-gradient-to-t from-orange-400 to-orange-600 rounded-t-md"
            />
          ))}
        </div>
        <div className="text-xs text-center text-orange-600 dark:text-orange-400">
          Model Performance Metrics
        </div>
      </div>
    </div>
  );
};

export const SkeletonSix = () => {
  return (
    <div className="h-48 flex items-center justify-center p-4">
      <div className="w-full bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm text-center">
        <div className="flex justify-center mb-4">
          <IconShield className="h-12 w-12 text-red-500" />
        </div>
        <div className="text-sm text-red-600 dark:text-red-400 font-medium">
          Enterprise Security
        </div>
        <div className="text-xs text-red-500 dark:text-red-400 mt-2">
          SOC 2 • GDPR • HIPAA
        </div>
      </div>
    </div>
  );
};

export const Globe = ({
  className
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.1, 0.8, 1],
      markers: [
        { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
        { location: [40.7128, -74.0060], size: 0.05 },  // New York
        { location: [51.5074, -0.1278], size: 0.05 },   // London
        { location: [35.6762, 139.6503], size: 0.05 },  // Tokyo
        { location: [52.5200, 13.4050], size: 0.05 },   // Berlin
        { location: [37.5665, 126.9780], size: 0.05 },  // Seoul
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};