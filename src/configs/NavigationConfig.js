import { 
  DashboardOutlined, 
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  AppstoreOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH} from 'configs/AppConfig'


const mainBordNavTree = [{
  key: 'mainboards',
  path: `${APP_PREFIX_PATH}/mainboards`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'mainboards-default',
      path: `${APP_PREFIX_PATH}/mainboards/default`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mainboards-catalog',
      path: `${APP_PREFIX_PATH}/mainboards/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'mainboards-catalog-products',
          path: `${APP_PREFIX_PATH}/mainboards/catalog/products`,
          title: 'Товары',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'mainboards-catalog-categories',
          path: `${APP_PREFIX_PATH}/mainboards/catalog/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'mainboards-catalog-collections',
          path: `${APP_PREFIX_PATH}/mainboards/catalog/collections`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'mainboards-catalog-combo',
          path: `${APP_PREFIX_PATH}/mainboards/catalog/combo`,
          title: 'Комбо',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'mainboards-orders',
      path: `${APP_PREFIX_PATH}/mainboards/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mainboards-clients',
      path: `${APP_PREFIX_PATH}/mainboards/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'mainboards-clientsList',
          path: `${APP_PREFIX_PATH}/mainboards/clientsList`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'mainboards-clientsGroups',
          path: `${APP_PREFIX_PATH}/mainboards/clientsGroups`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'mainboards-banners',
      path: `${APP_PREFIX_PATH}/mainboards/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'mainboards-promo-codes',
      path: `${APP_PREFIX_PATH}/mainboards/promo-codes`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'mainboards-offline-points',
      path: `${APP_PREFIX_PATH}/mainboards/offline-points`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'mainboards-offline-points-addresses',
          path: `${APP_PREFIX_PATH}/mainboards/offline-points/addresses`,
          title: 'Адреса',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'mainboards-offline-points-geozones',
          path: `${APP_PREFIX_PATH}/mainboards/offline-points/geozones`,
          title: 'Геозоны',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'mainboards-employees',
      path: `${APP_PREFIX_PATH}/mainboards/employees`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'mainboards-newsletters',
      path: `${APP_PREFIX_PATH}/mainboards/newsletters`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
}]

const appsNavTree = [{
  key: 'apps',
  path: `${APP_PREFIX_PATH}/apps`,
  title: 'системные',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
  ]
}]


const navigationConfig = [
  ...mainBordNavTree,
  ...appsNavTree,


]

export default navigationConfig;
