import prismaCliente from "../../../prisma/prisma";

interface OrderRequest{
    order_id: string;
}

class SendOrderService{
    async sendOrder({ order_id }: OrderRequest){
        const order = await prismaCliente.order.update({
            where:{
                id: order_id,
            },
            data:{
                draft: false,
            }
        });

        return order;
    }
}

export { SendOrderService }