<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('slug');
			$table->text('description');
			$table->json('pictures')->nullable();
			$table->string('adress')->nullable();
			$table->integer('city_id')->nullable();
			$table->string('tell')->nullable();
			$table->string('website')->nullable();
			$table->string('job_schedule')->nullable();
			$table->string('metro_id')->nullable();
			$table->string('email')->unique();
			$table->string('latitude')->nullable();
			$table->string('longitude')->nullable();
			$table->integer('active')->default(1);
			$table->timestamps();
			$table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
