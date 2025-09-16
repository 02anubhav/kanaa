function CouponCard({ code = "TOYS10" }) {
  return (
    <div className="flex items-center  justify-between p-3 border border-neutral-200 rounded-lg bg-gradient-to-r from-white to-green-100 overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center">
          %
        </div>
        <div>
          <span className="text-sm font-medium mr-2">Save 10% off</span>
          <span className="text-xs text-gray-700 underline">Learn More</span>
        </div>
      </div>
      <div className="px-3 py-2 border-dashed border-2 border-green-500 rounded text-sm">
        {code} 10
      </div>
    </div>
  );
}
export default CouponCard