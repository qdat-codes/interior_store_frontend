import { Text, Heading } from "@/shared/components/Text"
import { WalletOutlined } from "@ant-design/icons"
import { convertToVietnameseCurrency } from "@/utils/utils"
import type { ShippingMethodSectionProps } from "./type"
import { Icon } from "@/shared/components/Icon"

export const ShippingMethodSection = ({
    isAddressComplete,
    shippingMethods,
    selectedShippingMethod,
    onSelectShippingMethod,
}: ShippingMethodSectionProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <Heading
                text="Phương thức vận chuyển"
                level={2}
                className="text-xl font-bold mb-6 text-black"
            />
            {!isAddressComplete ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                        <WalletOutlined style={{ fontSize: 32, color: '#9CA3AF' }} />
                    </div>
                    <Text
                        text="Vui lòng chọn tỉnh / thành để có danh sách phương thức vận chuyển"
                        size="text-sm"
                        color="text-gray-400"
                        className="text-center"
                    />
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {shippingMethods.map((method) => {
                        const IconComponent = method.icon
                        const isSelected = selectedShippingMethod === method.id
                        return (
                            <label
                                key={method.id}
                                className={`flex items-start gap-3 cursor-pointer p-4 rounded-lg border-2 transition-all ${isSelected
                                    ? "border-green-500 bg-green-50"
                                    : "border-gray-300 hover:border-gray-400"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="shipping"
                                    value={method.id}
                                    checked={isSelected}
                                    onChange={(e) => onSelectShippingMethod(e.target.value)}
                                    className="mt-1 w-5 h-5"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Icon component={IconComponent} size="lg" color="text-black"></Icon>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <Text
                                                    text={method.name}
                                                    size="text-base"
                                                    color="text-gray-900"
                                                    weight="font-semibold"
                                                />
                                                <Text
                                                    text={convertToVietnameseCurrency(method.price)}
                                                    size="text-base"
                                                    color="text-[#CA7D45]"
                                                    weight="font-semibold"
                                                />
                                            </div>
                                            <Text
                                                text={method.description}
                                                size="text-sm"
                                                color="text-gray-900"
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>
                                    <Text
                                        text={method.detail}
                                        size="text-sm"
                                        color="text-gray-900"
                                        className="mt-2"
                                    />
                                </div>
                            </label>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
