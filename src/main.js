import { createApp } from 'vue'
import router from './router/index.js'
// import './style.css'
import App from './App.vue'
import 'vant/lib/index.css'
import { Button, Tabbar, TabbarItem,
        Sidebar, SidebarItem, Search,
        Col, Row, Card, Popup, ActionBar,
        ActionBarIcon, ActionBarButton,
        Tag, Cell, CellGroup, SwipeCell
} from 'vant'

const app = createApp(App)
app.use(router)
app.use(Button).use(Tabbar).use(TabbarItem)
    .use(Sidebar).use(SidebarItem).use(Search)
    .use(Col).use(Row).use(Card).use(Popup)
    .use(ActionBar).use(ActionBarIcon).use(ActionBarButton)
    .use(Tag).use(Cell).use(CellGroup).use(SwipeCell)

app.mount('#app')
