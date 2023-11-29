<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role_admin = Role::create(['name' => 'admin']);
        $role_editor = Role::create(['name' => 'editor']);
        $role_invitado = Role::create(['name' => 'invitado']);

        //Creo los permisos
        $permission_ver_role = Permission::create(['name' => 'ver role']);
        $permission_crear_role = Permission::create(['name' => 'crear role']);
        $permission_editar_role = Permission::create(['name' => 'editar role']);
        $permission_eliminar_role = Permission::create(['name' => 'eliminar role']);

        $permission_ver_permiso = Permission::create(['name' => 'ver permiso']);

        $permission_ver_usuario = Permission::create(['name' => 'ver usuario']);
        $permission_crear_usuario = Permission::create(['name' => 'crear usuario']);
        $permission_editar_usuario = Permission::create(['name' => 'editar usuario']);
        $permission_eliminar_usuario = Permission::create(['name' => 'eliminar usuario']);

        $permission_ver_producto = Permission::create(['name' => 'ver producto']);
        $permission_crear_producto = Permission::create(['name' => 'crear producto']);
        $permission_editar_producto = Permission::create(['name' => 'editar producto']);
        $permission_eliminar_producto = Permission::create(['name' => 'eliminar producto']);

        $permission_ver_componente = Permission::create(['name' => 'ver componente']);
        $permission_crear_componente = Permission::create(['name' => 'crear componente']);
        $permission_editar_componente = Permission::create(['name' => 'editar componente']);
        $permission_eliminar_componente = Permission::create(['name' => 'eliminar componente']);

        $permissions_admin = [$permission_ver_role, $permission_crear_role, $permission_editar_role, $permission_eliminar_role, $permission_ver_permiso,
        $permission_ver_usuario, $permission_crear_usuario, $permission_editar_usuario, $permission_eliminar_usuario, $permission_ver_producto, $permission_crear_producto, 
        $permission_editar_producto, $permission_eliminar_producto, $permission_ver_componente, $permission_crear_componente, $permission_editar_componente, $permission_eliminar_componente];

        $permissions_editor = [$permission_ver_producto, $permission_crear_producto, $permission_editar_producto,
        $permission_eliminar_producto, $permission_ver_componente, $permission_crear_componente, $permission_editar_componente, $permission_eliminar_componente];

        $permissions_invitado = [$permission_ver_producto, $permission_editar_producto, $permission_ver_componente, $permission_editar_componente];

        $role_admin->syncPermissions($permissions_admin);
        $role_editor->givePermissionTo($permissions_editor);
        $role_invitado->givePermissionTo($permissions_invitado);
    }
}
