GL.Routers.Application = GL.Routers.Base.extend({
  appRoutes: {
    '': 'home',
    'login': 'login'
  },

  initialize: function() {
    GL.Routers.Base.prototype.initialize.call(this);
  },

  home: function() {
    GL.Framework.navigate('login');
  },

  login: function() {
    GL.Framework.RegionManager.show(new GL.Views.Login());
  }
})
