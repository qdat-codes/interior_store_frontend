import { Button, Flex, Select, Table } from 'antd';
import type { TableProps } from 'antd';
import { Image } from '@/shared/components/Image';
import { Text } from '@/shared/components/Text';
import { convertToVietnameseCurrency } from '@/utils/utils';
import { DeleteOutlined } from '@ant-design/icons';
import { Icon } from '../Icon';
import { PRODUCT_COLORS } from '@/constants';
import type { CartTableRow } from './type';
import InputNumber from '../InputNumber';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

const COLOR_OPTIONS = PRODUCT_COLORS.map((c) => ({ value: c.name, label: c.name }));
const SIZE_OPTIONS = [
    { value: 'Nhỏ', label: 'Nhỏ' },
    { value: 'Vừa', label: 'Vừa' },
    { value: 'Lớn', label: 'Lớn' },
];

const ProductNameCell = ({ record }: { record: CartTableRow }) => {
    const navigate = useNavigate();
    return (
        <Flex gap={12} align="flex-start" className="py-2">
            <Image
                src={record.image}
                alt={record.name}
                width="w-20"
                height="h-20"
                objectFit="object-cover"
                className="rounded shrink-0 "
            />
            <Flex vertical gap={4} className="min-w-0" onClick={() => {
                navigate({
                    to: `/product/${record.key}`,
                });
            }}>

                <Text
                    text={record.name}
                    size="text-base"
                    color="text-gray-900"
                    weight="font-bold"
                    className="leading-tight cursor-pointer"
                />
                {record.collection && (
                    <Text
                        text={record.collection}
                        size="text-sm"
                        color="text-gray-500"
                        weight="font-normal"
                    />
                )}
                <Text
                    text={convertToVietnameseCurrency(record.unitPrice)}
                    size="text-sm"
                    color="text-orange-500"
                    weight="font-medium"
                    className='mt-3'
                />
            </Flex>
        </Flex>

    );
}

const columns: TableProps<CartTableRow>['columns'] = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        width: 320,
        render: (_, record) => <ProductNameCell record={record} />,
    },
    {
        title: 'Màu sắc',
        dataIndex: 'color',
        key: 'color',
        render: (_, record) => (
            <Select
                key={record.key}
                options={COLOR_OPTIONS}
                defaultValue={record.color}
                placeholder="Chọn màu"
                className="w-24"
            />
        ),
    },
    {
        title: 'Kích thước',
        dataIndex: 'size',
        key: 'size',
        render: (_, record) => (
            <Select
                key={record.key}
                options={SIZE_OPTIONS}
                defaultValue={record.size}
                placeholder="Chọn kích thước"
                className="w-24"
            />
        ),
    },
    {
        title: 'Số lượng',
        dataIndex: 'amount',
        key: 'amount',
        render: (_, record) => <InputNumber defaultValue={record.amount} />,
    },
    {
        title: 'Tổng giá',
        dataIndex: 'total',
        key: 'total',
        render: (_, record) => (
            <span className="text-orange-500 font-medium">
                {convertToVietnameseCurrency(record.total)}
            </span>
        ),
    },
    {
        title: '',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <Icon component={DeleteOutlined} />
        ),
    },
];

interface CustomTableProps {
    dataSource?: CartTableRow[];
}

const CustomTable = ({ dataSource = [] }: CustomTableProps) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
        <Flex gap="middle" vertical>
            <Flex align="center" gap="middle">
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Đặt lại
                </Button>
            </Flex>
            <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
        </Flex>
    );
};

export default CustomTable;
