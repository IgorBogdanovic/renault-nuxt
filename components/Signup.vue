<template>
	<div class="c-login__wrapper">
		<div class="c-login">
			<div class="c-login__close">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
					<g>
					<g id="close">
						<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
						214.2,178.5 		"/>
					</g>
					</g>
				</svg>
			</div>
			<div class="c-login--left">
				<h2 class="c-login__title">
					Sign Up
				</h2>
				<div class="c-login__txt">
          <p>Drive my Business is much better when you have an account.</p>
          <p><em>Get yourself one.</em></p>
          <!-- <p>{{$v.$error}} / {{$v.$invalid}}</p> -->
        </div>
			</div>
			<div class="c-login--right">
				<form action="">
          <div class="c-login__field c-login__field--username">
            <label for="username">username</label>
            <input type="text" name='username' v-model="username" @blur="$v.username.$touch()">
            <div class="c-login__validation-icons">
              <div v-if="!$v.username.$error && !$v.username.$invalid" class="c-login__check c-login__check--true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                  <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                </svg>
              </div>
              <div v-if="$v.username.$error" class="c-login__check c-login__check--false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                  <g>
                  <g id="close">
                    <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
                    214.2,178.5"/>
                  </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="c-login__field c-login__field--email">
            <label for="email">e-mail</label>
					  <input type="text" name='email' v-model="email" @blur="$v.email.$touch()">
            <div class="c-login__validation-icons">
              <div v-if="!$v.email.$error && !$v.email.$invalid" class="c-login__check c-login__check--true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                  <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                </svg>
              </div>
              <div v-if="$v.email.$error" class="c-login__check c-login__check--false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                  <g>
                  <g id="close">
                    <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
                    214.2,178.5"/>
                  </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="c-login__field c-login__field--password">
            <label for="password">password</label>
					  <input type="password" name='password' v-model="password" @blur="$v.password.$touch()">
            <div class="c-login__validation-icons">
              <div v-if="!$v.password.$error && !$v.password.$invalid" class="c-login__check c-login__check--true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                  <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                </svg>
              </div>
              <div v-if="$v.password.$error" class="c-login__check c-login__check--false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                  <g>
                  <g id="close">
                    <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
                    214.2,178.5"/>
                  </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="c-login__field c-login__field--confirm-password">
            <label for="cpassword">confirm password</label>
					  <input type="password" name='cpassword' v-model="confirmPassword" @blur="$v.confirmPassword.$touch()">
            <div class="c-login__validation-icons">
              <div v-if="!$v.confirmPassword.$error && !$v.confirmPassword.$invalid" class="c-login__check c-login__check--true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                  <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                </svg>
              </div>
              <div v-if="$v.confirmPassword.$error" class="c-login__check c-login__check--false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                  <g>
                  <g id="close">
                    <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
                    214.2,178.5"/>
                  </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
					<div class="c-login__terms">
						<input type="checkbox" name="terms" v-model="terms">
            <label for="terms">By singing up I agree with <span>terms and conditions.</span></label>	
					</div>
					<div class="c-login__submit">
						<button class='c-login__submit--signup' type="submit" :class="{'is-disabled': $v.$invalid}" :disabled="$v.$invalid">sign up</button>
						<span>or</span>
						<a class='c-login__submit--login'>log in</a>
					</div>				
				</form>
			</div>
		</div>		
	</div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
      termsValid: true
    }
  },
  validations: {
    username: {
      required,
      minLen: minLength(3)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      required,
      sameAs: sameAs('password')
    },
    terms: {
      required,
      sameAs: sameAs('termsValid')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/settings';
  
	.c-login {
    position: relative;
    
		@include breakpoint(desktop){
			max-width: 79%;
			position: absolute;
      width: 100%;
      right: 2rem;
      top: 2rem;
      display: flex;
		}
		&__wrapper{
			padding: 2.5rem;
			position: fixed;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.65);
		}
		&__close{
			position: absolute;
		  right: .9rem;
    	top: .9rem;
			width: 1.5rem;
    	height: 1.5rem;
			fill: $white;
			z-index: 1;
      cursor: pointer;
      
			@include breakpoint(desktop){
				right: 3.2rem;
			  top: 3.2rem;
			}
		}
		&--left{
			color: $white;
      padding: 1rem 3.3rem 1.4rem 3.3rem;
      background: url('~static/images/login-back.png');
			background-size: cover !important;
			background-position: center !important;
      position: relative;
      
			&:before{
				position: absolute;
				content: '';
				background:rgba(255, 204, 51, 0.85);
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
      }
      
			@include breakpoint(desktop){
				width: 41%;
				padding: 7rem;
			}
    }
    
		&--right{
			background: white;
      padding: 3rem 3.3rem 4rem 3.3rem;

      @include breakpoint(desktop){
				width: 59%;
				padding: 8.7rem 10.3rem;
			}
    }
      
    &__field {
      position: relative;

			label{
				text-transform: uppercase;
				@include fontSizeRem(10, 16);
        @include lineHeightRem(0, 0);
        @include letterSpacingEm(0, 0);
        color: #c6c6c6;
      }
      
			input{
				@include fontSizeRem(12, 22);
        @include lineHeightRem(0, 0);
        @include letterSpacingEm(0, 0);
				color: black;
				width: 100%;
				border: 0;
				border-bottom: 1px solid #c6c6c6;
				margin-bottom: 2.2rem;
        margin-top: .4rem;
        
				@include breakpoint(desktop){
          margin-bottom: 3.7rem;
          margin-top: 1.4rem;
          padding-bottom: 0.8rem;
				}
			}
    }
    
		&__title{
      @include fontSizeRem(30, 12);
      @include lineHeightRem(67, 15);
      @include letterSpacingEm(0, 0);
		  margin-bottom: .7rem;
		  position: relative;
			@include breakpoint(desktop){
			  font-size: 60px;
			  margin-bottom: 4.3rem;
			}
		}
		&__txt{
      @include fontSizeRem(12, 12);
      @include lineHeightRem(16, 15);
      @include letterSpacingEm(0, 0);
      position: relative;
      max-width: 75%;
      p {
        margin-bottom: .9rem;
      }

			@include breakpoint(desktop){
        font-size: 22px;
        
			  p {
			  	margin-bottom: 3.5rem;
			  }
			}
    }
    
    &__check {
      position: absolute;
      top: 1.3rem;
      right: .4rem;

      &--true {
        fill: #00cb65;
        width: 1.5rem;
        height: 1.2rem;
      }

      &--false {
        fill: red;
        width: 1.3rem;
        height: 1.3rem;
      }
    }

		&__terms{
      @include fontSizeRem(10, 12);
      @include lineHeightRem(0, 15);
      @include letterSpacingEm(0, 0);
			color: #c6c6c6;
			display: flex;
			align-items: center;
      margin: 5rem 0 2.7rem 0;
      
			input{
				width: auto;
				margin: 0;				
				margin-right: .8rem;
      }
      
			label{
			  text-transform: none;				
			}
		}
		&__submit{
			display: flex;
      align-items: center;
      
			@include breakpoint(desktop){
			  color: #c6c6c6;
      }
      
			&--signup{
				width: auto;
				margin: 0;
				background:#00cb65;
				text-transform: uppercase;
				@include fontSizeRem(10, 16);
        @include lineHeightRem(12, 0);
        @include letterSpacingEm(0, 0);
				color: white;
				border: 0;
				margin-right: 1.3rem;
        padding: 1rem 3.2rem;

        &[disabled],
        &[disabled]:hover,
        &[disabled]:active {
          background: lightgrey;
          cursor: not-allowed;
        }
        
				@include breakpoint(desktop){
					padding: 1.6rem 5.1rem;
					margin-right: 2.8rem;
				}
      }

      > span {
        color: #c6c6c6;
      }

			&--login {
				background: none;
				text-transform: uppercase;
				color: #00cb65;
				@include fontSizeRem(10, 16);
        @include lineHeightRem(0, 0);
        @include letterSpacingEm(0, 0);
				margin-left: .2rem;
			}
		}
	}
</style>