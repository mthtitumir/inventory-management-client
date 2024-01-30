import { Layout } from "antd"
const { Footer } = Layout;

const FooterC = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Flora Vista ©{new Date().getFullYear()} Created by M. T. H. Titumir
        </Footer>
    )
}

export default FooterC