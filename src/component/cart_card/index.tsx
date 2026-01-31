import { Button } from "@/shared/components/Button";
import { Icon } from "@/shared/components/Icon";
import CustomTable from "@/shared/components/Table";
import { Heading, Text } from "@/shared/components/Text"
import { convertToVietnameseCurrency } from "@/utils/utils";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "@tanstack/react-router";
import CartCardItem from "./cart_card_item";
import { Textarea } from "@/shared/components/Textarea";
import { useState, useMemo } from "react";

interface CartItem {
    name: string;
    image: string;
    price: number;
    amount: number;
    color: string;
    size: string;
    total: number;
    createAt: string;
}

const CartCard = () => {
    const totalItems = 1;
    const totalAmount = 1000000;
    const navigate = useNavigate();
    const [note, setNote] = useState("");

    // Hàm format ngày sang tiếng Việt
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        // Reset time để so sánh chỉ ngày
        const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const yesterdayOnly = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());

        if (dateOnly.getTime() === todayOnly.getTime()) {
            return "Hôm nay";
        } else if (dateOnly.getTime() === yesterdayOnly.getTime()) {
            return "Hôm qua";
        } else {
            return date.toLocaleDateString("vi-VN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        }
    };

    // Nhóm items theo ngày
    const groupedItems = useMemo((): Record<string, CartItem[]> => {
        const items: CartItem[] = [
            {
                name: "Sofa phòng khách",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
                price: 1000000,
                amount: 1,
                color: "Xám",
                size: "Lớn",
                total: 1000000,
                createAt: "2026-01-23",
            },
            {
                name: "Sofa phòng khách",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
                price: 1000000,
                amount: 1,
                color: "Xám",
                size: "Lớn",
                total: 1000000,
                createAt: "2026-01-23",
            },
            {
                name: "Sofa phòng khách",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
                price: 1000000,
                amount: 1,
                color: "Xám",
                size: "Lớn",
                total: 1000000,
                createAt: "2026-01-22",
            },
            {
                name: "Sofa phòng khách",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop",
                price: 1000000,
                amount: 1,
                color: "Xám",
                size: "Lớn",
                total: 1000000,
                createAt: "2001-04-23",
            },
        ];

        const groups: Record<string, CartItem[]> = {};
        items.forEach((item) => {
            const dateKey = item.createAt;
            if (!groups[dateKey]) {
                groups[dateKey] = [];
            }
            groups[dateKey].push(item);
        });
        return groups;
    }, []);

    // Sắp xếp các nhóm theo ngày (mới nhất trước)
    const sortedDateKeys = useMemo(() => {
        return Object.keys(groupedItems).sort((a, b) => {
            return new Date(b).getTime() - new Date(a).getTime();
        });
    }, [groupedItems]);

    // Chuyển đổi CartItem sang CartTableRow format
    const convertToTableData = (items: CartItem[]) => {
        return items.map((item, index) => ({
            key: `${item.name}-${item.createAt}-${index}`,
            name: item.name,
            image: item.image,
            unitPrice: item.price,
            color: item.color,
            size: item.size,
            amount: item.amount,
            total: item.total,
        }));
    };
    return (
        <>
            <div className="md:mx-8 lg:mx-40 md:my-12 lg:my-20">
                <div className="md:hidden block ">
                    <div className="flex justify-between items-center h-20 border-b border-[#C2CAD6] bg-white">
                        <Icon component={CloseOutlined} className="text-2xl text-black ml-6" />
                        <Heading text={`Giỏ hàng (${totalItems})`} level={1} className="text-center my-20 text-black font-bold mr-6" />
                        <div></div>
                    </div>

                    <div className="flex flex-col gap-4 bg-[#F5F5F7] px-6 py-6">
                        <Text text={"Danh sách sản phẩm"} size="text-xl" color="text-black" weight="font-bold" />
                        <div className="flex flex-col gap-6">
                            {sortedDateKeys.map((dateKey) => (
                                <div key={dateKey} className="flex flex-col gap-4">
                                    <Text
                                        text={formatDate(dateKey)}
                                        size="text-lg"
                                        color="text-[#676E8E]"
                                        weight="font-semibold"
                                        className="mb-2"
                                    />
                                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#D39864]">
                                        {groupedItems[dateKey].map((item, index) => (
                                            <CartCardItem
                                                key={`${item.name}-${dateKey}-${index}`}
                                                name={item.name}
                                                image={item.image}
                                                price={item.price}
                                                amount={item.amount}
                                                color={item.color}
                                                size={item.size}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-[#F5F5F7] px-6 py-6">
                        <Text text={"Ghi chú"} size="text-xl" color="text-black" weight="font-bold"></Text>
                        <Textarea
                            placeholder="Nhập ghi chú của bạn..."
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            height="100px"
                            className="w-full"
                        />

                        <div 
                            className="w-full flex justify-between items-center  bg-[#D39864] p-4 rounded-lg cursor-pointer"
                            onClick={() => navigate({ to: "/checkout" })}
                        >
                            <Text text={`Thanh toán`} size="text-xl" weight="font-bold" className="text-white"></Text>
                            <Text text={`${convertToVietnameseCurrency(totalAmount)}`} size="text-xl" weight="font-bold" className="text-white"></Text>

                        </div>
                    </div>
                </div>

                <div className="hidden md:flex flex-col gap-4 md:gap-6">
                    <Heading text={`Giỏ hàng của bạn (${totalItems})`} level={1} className="text-center text-black font-bold md:text-2xl lg:text-3xl" />
                    <Text text={`Bạn đang có ${totalItems} sản phẩm trong giỏ hàng`} size="text-base" color="text-black" weight="font-medium" className="mb-4 md:mb-6 font-bold text-center md:text-left" />
                    {sortedDateKeys.map((dateKey) => (
                        <div key={dateKey} className="flex flex-col gap-4">
                            <Text
                                text={formatDate(dateKey)}
                                size="text-lg"
                                color="text-[#676E8E]"
                                weight="font-semibold"
                                className="mb-2"
                            />
                            <CustomTable dataSource={convertToTableData(groupedItems[dateKey])} />
                        </div>
                    ))}
                    <div className="flex flex-col gap-2 text-end">
                        <div className="text-xl md:text-2xl font-semibold">
                            <span className="text-[#000000] ">Tạm tính: </span>
                            <span className="text-[#CA7D45] ">{convertToVietnameseCurrency(totalAmount)}</span>
                        </div>
                        <Text text={"Chưa bao gồm thuế và phí vận chuyển"} size="text-sm md:text-base"></Text>
                    </div>
                    <div className="flex flex-col md:flex-row justify-end gap-4">
                        <Button children={"Tiếp tục mua sắm"} onclick={() => navigate({ to: "/" })} className="bg-white! border border-[#D39864]! text-[#D39864]! rounded-lg w-full md:w-auto text-sm md:text-base"></Button>
                        <Button children={"Thanh toán"} onclick={() => navigate({ to: "/checkout" })} className="bg-[#D39864]! border border-[#D39864]! text-white! rounded-lg w-full md:w-auto text-sm md:text-base"></Button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CartCard
