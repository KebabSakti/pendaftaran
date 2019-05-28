<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBerobatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('berobats', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('pasien_id');
            $table->bigInteger('dokter_id');
            $table->bigInteger('poli_id');
            $table->string('nik');
            $table->date('tgl_berobat');
            $table->integer('no_antrian');
            $table->enum('status', ['Selesai','Batal']);
            $table->text('hasil_rekam')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('berobats');
    }
}
