<?php

namespace App\Helpers\Account;

use App\Models\User;

class GetUserStatusHelper {
    public function getUserStatus($email_address) {
        $user = User::where('email', $email_address)
        ->first();

        return $user->status;
    }
}