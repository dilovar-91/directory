<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('author');
			$table->string('title');
			$table->text('pros');
			$table->text('cons');
			$table->text('text');
			$table->integer('rating')->default(5)->nullabe();			
			$table->string('tell')->nullabe();
			$table->integer('company_id')->unsigned();
			$table->integer('recomend_count')->default(0)->unsigned();
			$table->integer('published')->default(0);
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
        Schema::dropIfExists('reviews');
    }
}
