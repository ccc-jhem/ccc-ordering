<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                // Check the user's role and redirect accordingly
                switch (Auth::user()->role) {
                    case 'none':
                        return redirect(RouteServiceProvider::NOTVERIFIED);
                    case 'salesrep':
                        return redirect(RouteServiceProvider::SALESREPHOME);
                    case 'promodiser':
                        return redirect(RouteServiceProvider::PROMOHOME);
                    case 'admin':
                        return redirect(RouteServiceProvider::ADMINHOME);
                    default:
                        // Handle any other roles or unexpected cases
                        return redirect(RouteServiceProvider::HOME);
                }
            }
        }
        return $next($request);
    }
}
