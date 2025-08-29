import { ImageFrame } from "@/components/mdx/ImageFrame";
import Image from "next/image";

export default function ImageFrameDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ImageFrame Component Demo
          </h1>
          <p className="text-lg text-gray-600">
            Showcasing the Mac Air frame mockup with different content types
          </p>
        </div>

        {/* Example 1: Website Screenshot */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Website Screenshot</h2>
          <div className="flex justify-center">
            <ImageFrame className="w-180">
              <Image
                src="/projects/scout/hero_mac-air.webp"
                alt="Scout"
                fill
                className="object-cover"
              />
            </ImageFrame>
          </div>
        </div>

        {/* Example 2: App Interface */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">App Interface</h2>
          <div className="flex justify-center">
            <ImageFrame className="w-200">
              <div className="w-full h-full bg-white p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Dashboard</h3>
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Users</div>
                    <div className="text-xl font-bold text-gray-800">1,234</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Revenue</div>
                    <div className="text-xl font-bold text-gray-800">$12,345</div>
                  </div>
                </div>
              </div>
            </ImageFrame>
          </div>
        </div>

        {/* Example 3: Image Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Image Content</h2>
          <div className="flex justify-center">
            <ImageFrame className="w-100">
              <Image
                src="/img/lowRes/brain.png"
                alt="Brain illustration"
                fill
                className="object-cover"
              />
            </ImageFrame>
          </div>
        </div>

        {/* Example 4: Video Player Mockup */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Video Player</h2>
          <div className="flex justify-center">
            <ImageFrame className="w-200">
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg">Video Player Interface</p>
                </div>
              </div>
            </ImageFrame>
          </div>
        </div>

        {/* Example 5: Mobile App Mockup */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Mobile App</h2>
          <div className="flex justify-center">
            <ImageFrame className="w-120">
              <div className="w-full h-full bg-gradient-to-b from-green-400 to-blue-500 p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-bold">Fitness App</div>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="text-white text-sm">Steps Today</div>
                    <div className="text-white text-xl font-bold">8,432</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="text-white text-sm">Calories Burned</div>
                    <div className="text-white text-xl font-bold">342</div>
                  </div>
                </div>
              </div>
            </ImageFrame>
          </div>
        </div>
      </div>
    </div>
  );
}
