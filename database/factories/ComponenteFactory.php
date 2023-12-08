<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Componente>
 */
class ComponenteFactory extends Factory
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
            'name' => $this->faker->randomElement(['Bulon','Soporte','chapa','Sujección']),
            'cant' => $this->faker->randomElement([18,4015,211,96,23,637,512,146,55,91,108]),
            'ubica' => $this->faker->randomElement(['Estantería 1 box 2','Estantería 2 box 3','Estantería 6 box 3','Estantería 5 box 2']),
            'stock' => $this->faker->randomElement([18,4015,211,96,23,637,512,146,55,91,108]),
            
        ];
    }
}
