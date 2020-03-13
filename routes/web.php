<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/companies', 'Api\CompanyController@getCompanies');
Route::get('/topcompanies', 'Api\CompanyController@getTopCompanies');
Route::get('/companies/category/{slug}', 'Api\CompanyController@getCompaniesByCategory');
Route::get('/companies/city/{slug}', 'Api\CompanyController@getCompaniesByCitySlug');
Route::get('/coords', 'Api\CompanyController@getAllCoords');
Route::get('/search', 'Api\CompanyController@searchCompanies');
Route::get('/related', 'Api\CompanyController@getRelatedCompanies');
Route::get('/company/{id}', 'Api\CompanyController@getCompany');
Route::get('/reviews/{id}', 'Api\ReviewController@getReviews');
Route::get('/allreviews', 'Api\ReviewController@getAllReviews');
Route::get('/articles', 'Api\ArticleController@getArticles');
Route::get('/article/{slug}', 'Api\ArticleController@getArticle');
Route::get('/allreviews/{page}', 'Api\ReviewController@getAllReviews');
Route::get('/img/{image}', 'Api\CompanyController@getImage');
Route::post('/rating/new', 'Api\ReviewController@setrating');
Route::post('/review/like', 'Api\ReviewController@setLike');
Route::post('/review/setreview', 'Api\ReviewController@setrating');
Route::get('/latestreviews', 'Api\ReviewController@getLatestReviews');

Route::get('/cities', 'Api\CompanyController@cities')->name('api.cities');
Route::get('/cities/{id}', 'Api\CompanyController@getCompaniesByCity')->name('api.companybycity');

Route::get('/city/{slug}', 'Api\CompanyController@getCity')->name('api.city');
Route::get('/metros', 'Api\CompanyController@metro')->name('api.metro');
Route::get('/categories', 'Api\CategoryController@getCategories')->name('api.categories');
Route::get('/category/{slug}', 'Api\CategoryController@getCategoryBySlug')->name('api.categorybyslug');


Route::get('{path}', function () {
    //return file_get_contents(public_path('_nuxt/index.html'));
	return abort(404);
})->where('path', '(.*)');
