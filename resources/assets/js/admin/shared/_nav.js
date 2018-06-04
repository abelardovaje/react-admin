export default {
  items: [
    {
      name: 'Dashboard',
      url: '/admin/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Menu',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'User Management',
      url: '/admin/user',
      icon: 'icon-drop',
    },
    {
      name: 'Organization',
      url: '/admin/organization',
      icon: 'icon-pencil',
    },
    {
      name: 'Permissions',
      url: '/admin/permission',
      icon: 'icon-cursor'
    }
  
  ],
};
