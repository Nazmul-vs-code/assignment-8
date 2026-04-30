import React from 'react';

const TipsQorbani = () => {
    return (
        <div>
            {/* Qurbani Tips Section */}
      <section className="w-[80%] mx-auto mb-20 p-8 bg-slate-50 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🌙 Essential Qurbani Tips
        </h2>
        
        <ul className="space-y-4">
          <li className="flex gap-3 text-gray-700">
            <span className="font-bold text-orange-600">01.</span>
            <p><strong>Check Animal Age:</strong> Ensure the cow/buffalo is at least 2 years old, and goats/sheep are at least 1 year old.</p>
          </li>
          
          <li className="flex gap-3 text-gray-700">
            <span className="font-bold text-orange-600">02.</span>
            <p><strong>Physical Health:</strong> Look for bright eyes, a shiny coat, and active movement. Avoid animals with broken horns, visible wounds, or limping.</p>
          </li>

          <li className="flex gap-3 text-gray-700">
            <span className="font-bold text-orange-600">03.</span>
            <p><strong>Proper Feeding:</strong> Stop feeding the animal solid food 12 hours before the sacrifice, but continue to provide plenty of clean water.</p>
          </li>

          <li className="flex gap-3 text-gray-700">
            <span className="font-bold text-orange-600">04.</span>
            <p><strong>Waste Management:</strong> Always keep a large supply of bleaching powder and clean water ready to wash the area immediately after the sacrifice.</p>
          </li>

          <li className="flex gap-3 text-gray-700">
            <span className="font-bold text-orange-600">05.</span>
            <p><strong>Meat Distribution:</strong> Follow the Sunnah by dividing the meat into three equal parts: one for your family, one for relatives, and one for the poor.</p>
          </li>
        </ul>
      </section>
        </div>
    );
};

export default TipsQorbani;