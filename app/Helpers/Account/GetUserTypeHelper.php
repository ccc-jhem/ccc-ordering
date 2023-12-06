<?php

namespace App\Helpers\Account;

use App\Models\User;

class GetUserTypeHelper {
    public function getUserAccountType($email_address) {
        $user = User::where('email', $email_address)
        ->first();

        return $user->role;
    }
}