<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto>
 */
class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => $this->faker->unique()->numberBetween(1, 2000),
            'name' => $this->faker->randomElement(['viela','placa','chapa','bicing']),
            'cant' => $this->faker->numberBetween(1, 20000),
            'stock' => $this->faker->numberBetween(1, 2000),
            'ubica' => $this->faker->randomElement(['Estantería 1 box 2','Estantería 2 box 3','Estantería 6 box 3','Estantería 5 box 2']),
            'util' => $this->faker->numberBetween(1, 400),
            'sitio' => $this->faker->randomElement(['Estantería 1 box 2','Estantería 2 box 3','Estantería 6 box 3','Estantería 5 box 2']),
            'descript' => $this->faker->text(60),
        ];
    }
}
