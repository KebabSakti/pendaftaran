@extends('layouts.app')

@section('content')

    <div class="auto-form-wrapper">
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="form-group">
                <label class="label">NIK</label>
                <div class="input-group">
                    <input type="text" name="email" class="form-control" placeholder="NIK" value="{{ old('name') }}" required autofocus>
                    <div class="input-group-append">
          <span class="input-group-text">
            <i class="mdi mdi-check-circle-outline"></i>
          </span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="label">Password</label>
                <div class="input-group">
                    <input type="password" class="form-control" placeholder="*********" name="password" required>
                    <div class="input-group-append">
          <span class="input-group-text">
            <i class="mdi mdi-check-circle-outline"></i>
          </span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary submit-btn btn-block" type="submit">Login</button>
            </div>
            <div class="form-group d-flex justify-content-between">
                <div class="form-check form-check-flat mt-0">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="remember" {{ old('remember') ? 'checked' : '' }}> Keep me signed in
                    </label>
                </div>
            </div>
        </form>

@endsection
