<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Jose',
                'email' => 'jose@mail.com',
                'password' => '12345678',
                'role' => 'admin',
            ],
            [
                'name' => 'Gaspar',
                'email' => 'gaspar@mail.com',
                'password' => '12345678',
                'role' => 'admin',
            ],
            [
                'name' => 'Ferran',
                'email' => 'ferran@mail.com',
                'password' => '12345678',
                'role' => 'admin',
            ],
            [
                'name' => 'Editor',
                'email' => 'editor@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Editor1',
                'email' => 'editor1@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Editor2',
                'email' => 'editor2@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Editor3',
                'email' => 'editor3@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Editor4',
                'email' => 'editor4@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Luis',
                'email' => 'luis@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Puig',
                'email' => 'puig@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Anna',
                'email' => 'anna@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Miriam',
                'email' => 'miriam@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'David',
                'email' => 'david@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Joan',
                'email' => 'joan@mail.com',
                'password' => '12345678',
                'role' => 'editor',
            ],
            [
                'name' => 'Manolo',
                'email' => 'manolo@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Quim',
                'email' => 'Quim@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Quico',
                'email' => 'quico@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Adrian',
                'email' => 'adrian@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Ruben',
                'email' => 'ruben@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Jordi',
                'email' => 'jordi@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Jaume',
                'email' => 'jaume@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Toni',
                'email' => 'toni@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Richard',
                'email' => 'richard@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ],
            [
                'name' => 'Invitado',
                'email' => 'invitado@mail.com',
                'password' => '12345678',
                'role' => 'invitado',
            ]
        ];

        foreach($users as $user) {
            $created_user = User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => Hash::make($user['password']),
                
            ]);

            $created_user->assignRole($user['role']);
        }
    
    }
}
