<?php

use Illuminate\Database\Seeder;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $User = new User;
        $User->name = 'admin';
        $User->email = 'admin';
        $User->password = bcrypt('admin');
        $User->level = 'admin';
        $User->save();
    }
}
