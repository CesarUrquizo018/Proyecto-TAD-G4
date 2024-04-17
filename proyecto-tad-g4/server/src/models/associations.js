// associations.js
const { Proyecto, Usuario, MiembrosProyecto, Anotaciones, Rol, UsuarioRol, Fuentes, Otros } = require('./index'); // Asegúrate de que el path sea correcto

// Usuario a Proyecto (Un usuario tiene muchos proyectos)
Usuario.hasMany(Proyecto, { foreignKey: 'id_usuario' });
Proyecto.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Proyecto a Fuentes (Un proyecto tiene muchas fuentes)
Proyecto.hasMany(Fuentes, { foreignKey: 'id_proyecto' });
Fuentes.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

// Proyecto a Otros (Un proyecto tiene muchos otros)
Proyecto.hasMany(Otros, { foreignKey: 'id_proyecto' });
Otros.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

// Proyecto a MiembrosProyecto (Muchos a muchos entre Proyecto y Usuario)
Usuario.belongsToMany(Proyecto, { through: MiembrosProyecto, foreignKey: 'id_usuario', otherKey: 'id_proyecto' });
Proyecto.belongsToMany(Usuario, { through: MiembrosProyecto, foreignKey: 'id_proyecto', otherKey: 'id_usuario' });

// Usuario a Anotaciones (Un usuario tiene muchas anotaciones)
Usuario.hasMany(Anotaciones, { foreignKey: 'id_usuario' });
Anotaciones.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Proyecto a Anotaciones (Un proyecto tiene muchas anotaciones)
Proyecto.hasMany(Anotaciones, { foreignKey: 'id_proyecto' });
Anotaciones.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

// Rol a UsuarioRol (Un rol tiene muchos usuarios a través de UsuarioRol)
Rol.belongsToMany(Usuario, { through: UsuarioRol, foreignKey: 'id_rol', otherKey: 'id_usuario' });

// Usuario a UsuarioRol (Un usuario tiene muchos roles a través de UsuarioRol)
Usuario.belongsToMany(Rol, { through: UsuarioRol, foreignKey: 'id_usuario', otherKey: 'id_rol' });

module.exports = {
  // Aquí puedes exportar las relaciones si las necesitas en otros lugares
};
