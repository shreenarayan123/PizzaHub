import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import  { PizzaOrderType } from "@/lib/Data"
import { useGlobalContext } from "@/app/context/globalContext";


export function PizzaTable() {
    const { order } = useGlobalContext();
  const getStatusBadge = (status: string) => {
  const base = 'px-2 py-1 rounded-full text-white text-sm font-medium';
  switch (status) {
    case 'Pending':
      return <span className={`${base} bg-yellow-500`}>{status}</span>;
    case 'Preparing':
      return <span className={`${base} bg-blue-500`}>{status}</span>;
    case 'Out for Delivery':
      return <span className={`${base} bg-orange-500`}>{status}</span>;
    case 'Delivered':
      return <span className={`${base} bg-green-600`}>{status}</span>;
    case 'Cancelled':
      return <span className={`${base} bg-red-500`}>{status}</span>;
  }
};
    
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">OrderId</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Pizza Type</TableHead>
          <TableHead >Order Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {order.map((item: PizzaOrderType) => (
          <TableRow key={item.orderId}>
            <TableCell className="font-medium">{item.orderId}</TableCell>

            <TableCell>{item.customerName}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{getStatusBadge(item.status)}</TableCell>
            <TableCell>{item.pizzaType}</TableCell>
            <TableCell>{item.orderDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

