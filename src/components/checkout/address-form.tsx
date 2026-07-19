export function AddressForm() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-slate-600">Họ tên người nhận</label>
          <input id="name" name="name" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Nguyễn Văn A" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-slate-600">Số điện thoại</label>
          <input id="phone" name="phone" type="tel" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="0xxx xxx xxxx" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="province" className="text-sm font-semibold text-slate-600">Tỉnh/Thành</label>
          <input id="province" name="province" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="TP. HCM" />
        </div>
        <div>
          <label htmlFor="district" className="text-sm font-semibold text-slate-600">Quận/Huyện</label>
          <input id="district" name="district" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Quận 1" />
        </div>
        <div>
          <label htmlFor="ward" className="text-sm font-semibold text-slate-600">Phường/Xã</label>
          <input id="ward" name="ward" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Bến Nghé" />
        </div>
      </div>
      <div>
        <label htmlFor="line1" className="text-sm font-semibold text-slate-600">Địa chỉ chi tiết</label>
        <input id="line1" name="line1" type="text" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Số nhà, tên đường" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-slate-600">Email</label>
        <input id="email" name="email" type="email" required className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="email@example.com" />
      </div>
    </>
  );
}
