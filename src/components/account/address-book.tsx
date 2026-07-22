"use client";

import { MapPin, Pencil, Plus, Star, Trash2, X } from "lucide-react";
import { useState } from "react";

type Address = Readonly<{
  id: string;
  name: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  line1: string;
  isDefault: boolean;
}>;

const demoAddresses: Address[] = [
  {
    id: "addr-1",
    name: "Nguyễn Văn A",
    phone: "0912 345 678",
    province: "TP. Hồ Chí Minh",
    district: "Quận 1",
    ward: "Bến Nghé",
    line1: "42 Nguyễn Huệ",
    isDefault: true,
  },
  {
    id: "addr-2",
    name: "Nguyễn Văn A",
    phone: "0912 345 678",
    province: "Hà Nội",
    district: "Hai Bà Trưng",
    ward: "Phạm Đình Hổ",
    line1: "209 Lê Duẩn",
    isDefault: false,
  },
];

export function AddressBook() {
  const [addresses, setAddresses] = useState<Address[]>(demoAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Address, "id" | "isDefault">>({
    name: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    line1: "",
  });

  function openAddForm() {
    setEditingId(null);
    setForm({ name: "", phone: "", province: "", district: "", ward: "", line1: "" });
    setShowForm(true);
  }

  function openEditForm(addr: Address) {
    setEditingId(addr.id);
    setForm({ name: addr.name, phone: addr.phone, province: addr.province, district: addr.district, ward: addr.ward, line1: addr.line1 });
    setShowForm(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editingId) {
      setAddresses((prev) => prev.map((a) => (a.id === editingId ? { ...a, ...form } : a)));
    } else {
      const newAddr: Address = { ...form, id: `addr-${Date.now()}`, isDefault: addresses.length === 0 };
      setAddresses((prev) => [...prev, newAddr]);
    }
    setShowForm(false);
    setEditingId(null);
  }

  function deleteAddress(id: string) {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  }

  function setDefault(id: string) {
    setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
  }

  return (
    <div className="flex flex-col gap-4">
      {addresses.length > 0 ? (
        <div className="flex flex-col gap-3">
          {addresses.map((addr) => (
            <div key={addr.id} className={`rounded-panel border bg-white p-5 ${addr.isDefault ? "border-electric" : "border-slate-200"}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-midnight">{addr.name}</p>
                      {addr.isDefault ? (
                        <span className="inline-flex items-center gap-1 rounded bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-tech">
                          <Star className="size-3" aria-hidden="true" /> Mặc định
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{addr.phone}</p>
                    <p className="mt-0.5 text-sm text-slate-500">{addr.line1}, {addr.ward}, {addr.district}, {addr.province}</p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button type="button" onClick={() => openEditForm(addr)} className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:border-electric hover:text-electric" aria-label="Sửa địa chỉ">
                    <Pencil className="size-4" aria-hidden="true" />
                  </button>
                  <button type="button" onClick={() => deleteAddress(addr.id)} className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:border-red-300 hover:text-red-500" aria-label="Xóa địa chỉ">
                    <Trash2 className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              {!addr.isDefault ? (
                <button type="button" onClick={() => setDefault(addr.id)} className="mt-3 text-xs font-bold text-electric hover:underline">
                  Đặt làm mặc định
                </button>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-panel border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <h2 className="font-display text-xl font-semibold text-midnight">Chưa có địa chỉ nào</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
            Thêm địa chỉ giao hàng để thanh toán nhanh hơn.
          </p>
        </div>
      )}

      {showForm ? (
        <form onSubmit={handleSubmit} className="rounded-panel border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-midnight">{editingId ? "Sửa địa chỉ" : "Thêm địa chỉ mới"}</h2>
            <button type="button" onClick={() => setShowForm(false)} className="grid size-9 place-items-center rounded-lg text-slate-400 hover:text-midnight" aria-label="Đóng">
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="addr-name" className="text-sm font-semibold text-slate-600">Họ tên</label>
                <input id="addr-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label htmlFor="addr-phone" className="text-sm font-semibold text-slate-600">Số điện thoại</label>
                <input id="addr-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="09xx xxx xxx" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="addr-province" className="text-sm font-semibold text-slate-600">Tỉnh/Thành</label>
                <input id="addr-province" type="text" required value={form.province} onChange={(e) => setForm({ ...form, province: e.target.value })} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="TP. HCM" />
              </div>
              <div>
                <label htmlFor="addr-district" className="text-sm font-semibold text-slate-600">Quận/Huyện</label>
                <input id="addr-district" type="text" required value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Quận 1" />
              </div>
              <div>
                <label htmlFor="addr-ward" className="text-sm font-semibold text-slate-600">Phường/Xã</label>
                <input id="addr-ward" type="text" required value={form.ward} onChange={(e) => setForm({ ...form, ward: e.target.value })} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Bến Nghé" />
              </div>
            </div>
            <div>
              <label htmlFor="addr-line1" className="text-sm font-semibold text-slate-600">Địa chỉ chi tiết</label>
              <input id="addr-line1" type="text" required value={form.line1} onChange={(e) => setForm({ ...form, line1: e.target.value })} className="mt-1.5 min-h-11 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 focus:border-electric focus:outline-none" placeholder="Số nhà, tên đường" />
            </div>
            <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-full bg-electric px-6 text-sm font-bold text-white hover:bg-blue-700 sm:w-auto">
              {editingId ? "Lưu thay đổi" : "Thêm địa chỉ"}
            </button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={openAddForm} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 px-6 text-sm font-bold text-slate-600 hover:border-electric hover:text-electric sm:w-auto">
          <Plus className="size-4" aria-hidden="true" /> Thêm địa chỉ mới
        </button>
      )}
    </div>
  );
}
