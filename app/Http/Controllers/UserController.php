<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $user = auth()->user();
        if($user->can('checkRole','App\Model\User')){
            return 'Allow';
        }

        return 'not allow';
    }
}
