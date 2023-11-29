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
                'name' => 'Editor',
                'email' => 'editor@mail.com',
                'password' => '12345678',
                'role' => 'editor',
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
