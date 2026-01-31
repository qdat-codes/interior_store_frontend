import Footer from "@/component/footer"
import Header from "@/component/header"
import CartCard from "@/component/cart_card"

const CartPage = () => {
    return (
        <>
            <div className="w-full font-jakarta">
                <div className="md:block hidden">
                    <Header />
                </div>
                <div className="md:px-3 lg:px-0">
                    <CartCard />
                </div>
                <div className="md:block hidden">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default CartPage
