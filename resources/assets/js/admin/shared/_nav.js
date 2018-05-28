export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
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
      url: '/user',
      icon: 'icon-drop',
    },
    {
      name: 'Organization',
      url: '/organization',
      icon: 'icon-pencil',
    },
    {
      name: 'Roles',
      url: '/roles',
      icon: 'icon-puzzle',
    },
    {
      name: 'Permissions',
      url: '/admin/permission',
      icon: 'icon-cursor'
    }
  
  ],
};
