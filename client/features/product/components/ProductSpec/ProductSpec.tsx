
export const ProductSpec = () => {
  return (

    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Specifications</h2>
      <div className="space-y-4 md:max-w-lg">
        <div className="flex justify-between items-center py-2 border-b border-[#3a1a57]">
          <span className="text-gray-300 text-lg">Brand</span>
          <span className="text-lg">Phillips</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-[#3a1a57]">
          <span className="text-gray-300 text-lg">Item weight (g)</span>
          <span className="text-lg">77</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-[#3a1a57]">
          <span className="text-gray-300 text-lg">Dimensions (cm)</span>
          <span className="text-lg">12.6 x 6.2 x 6.2</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-[#3a1a57]">
          <span className="text-gray-300 text-lg">Item Model number</span>
          <span className="text-lg">E27 ES</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-[#3a1a57]">
          <span className="text-gray-300 text-lg">Colour</span>
          <span className="text-lg">Cool daylight</span>
        </div>
      </div>
    </div>
  )
}
