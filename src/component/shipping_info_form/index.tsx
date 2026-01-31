import { Input } from "@/shared/components/Input"
import { Text, Heading } from "@/shared/components/Text"
import { Select } from "@/shared/components/Select"
import type { CheckoutFormData } from "@/pages/checkout_page/types"
import type { ShippingInfoFormProps } from "./type"
export type { CheckoutFormData }

export const ShippingInfoForm = ({
    formData,
    onInputChange,
    onProvinceChange,
    provinceOptions,
    districtOptions,
    wardOptions,
}: ShippingInfoFormProps) => {

    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <Heading
                text="Thông tin giao hàng"
                level={2}
                className="text-xl font-bold mb-6 text-black"
            />
            <div className="flex flex-col gap-4">
                <div>
                    <Text
                        text="Họ và tên"
                        size="text-sm"
                        color="text-black"
                        weight="font-medium"
                        className="mb-2 block"
                    />
                    <Input
                        placeholder="Nhập thông tin"
                        value={formData.username}
                        onChange={(e) => onInputChange("username", e.target.value)}
                        className="w-full border-[#747D9C]"
                        width="100%"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Text
                            text="Email"
                            size="text-sm"
                            color="text-black"
                            weight="font-medium"
                            className="mb-2 block"
                        />
                        <Input
                            placeholder="Nhập thông tin"
                            value={formData.email}
                            onChange={(e) => onInputChange("email", e.target.value)}
                            className="w-full border-[#747D9C]"
                            width="100%"
                        />
                    </div>
                    <div>
                        <Text
                            text="Số điện thoại"
                            size="text-sm"
                            color="text-black"
                            weight="font-medium"
                            className="mb-2 block"
                        />
                        <Input
                            placeholder="Nhập thông tin"
                            value={formData.phone}
                            onChange={(e) => onInputChange("phone", e.target.value)}
                            className="w-full border-gray-300"
                            width="100%"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Text
                            text="Tỉnh/thành"
                            size="text-sm"
                            color="text-black"
                            weight="font-medium"
                            className="mb-2 block"
                        />
                        <Select
                            options={provinceOptions}
                            value={formData.province}
                            onChange={onProvinceChange}
                            placeholder="Chọn tỉnh/thành"
                            variant="form"
                            trigger="click"
                        />
                    </div>
                    <div>
                        <Text
                            text="Quận/huyện"
                            size="text-sm"
                            color="text-black"
                            weight="font-medium"
                            className="mb-2 block"
                        />
                        <Select
                            options={districtOptions}
                            value={formData.district}
                            onChange={(value) => onInputChange("district", value)}
                            placeholder="Chọn quận/huy..."
                            variant="form"
                            trigger="click"
                        />
                    </div>
                    <div>
                        <Text
                            text="Phường/xã"
                            size="text-sm"
                            color="text-black"
                            weight="font-medium"
                            className="mb-2 block"
                        />
                        <Select
                            options={wardOptions}
                            value={formData.ward}
                            onChange={(value) => onInputChange("ward", value)}
                            placeholder="Chọn phường/xã"
                            variant="form"
                            trigger="click"
                        />
                    </div>
                </div>
                <div>
                    <Text
                        text="Địa chỉ cụ thể"
                        size="text-sm"
                        color="text-black"
                        weight="font-medium"
                        className="mb-2 block"
                    />
                    <Input
                        placeholder="Nhập thông tin"
                        value={formData.address}
                        onChange={(e) => onInputChange("address", e.target.value)}
                        className="w-full border-gray-300"
                        width="100%"
                    />
                </div>
            </div>
        </div>
    )
}
