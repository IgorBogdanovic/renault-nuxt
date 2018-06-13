<template>
	<div class="c-login__wrapper">
		<div class="c-login">
			<div class="c-login__close" @click="deactivateLogin">
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
					Log In
				</h2>
				<div class="c-login__txt">
          <p>Welcome back!</p>
        </div>
        <div class="c-login__logo u-only-desktop">
          <img src="~static/images/logo.png" alt="logo">
        </div>
			</div>
			<div class="c-login--right">
				<form action="">
          <div class="c-login__field c-login__field--username">
            <label for="username">username</label>
            <input type="text" name='username' placeholder="enter username" v-model="username">
            <div class="c-login__validation-msg">
              <div v-if="serverResValid" class="c-login__check c-login__check--true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                  <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="c-login__field c-login__field--password">
            <label for="password">password</label>
					  <input type="password" name='password' placeholder="enter password" v-model="password">
            <div v-if="serverResValid" class="c-login__check c-login__check--true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
              </svg>
            </div>
          </div>
          <div class="c-login__validation u-clearfix">
            <span v-if="serverError" class="c-login__validation--false-msg">username and password do not match</span>
            <span class="c-login__validation--forgot-opt">forgot password?</span>
          </div>
					<div class="c-login__submit">
						<button class='c-login__submit--login' type="submit" :class="{'is-disabled': $v.$invalid}" :disabled="$v.$invalid">log in</button>
						<span>or</span>
						<div class='c-login__submit--signup' @click="activateSignup">sign up</div>
					</div>				
				</form>
			</div>
		</div>		
	</div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      username: '',
      password: '',
      serverResValid: false,
      serverError: false
    }
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    deactivateLogin() {
      this.$emit('deactivateLogin');
    },
    activateSignup() {
      this.$emit('activateSignup');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/settings';

	.c-login {
    position: relative;
    
		@include breakpoint(desktop){
			max-width: 1140px;
			position: absolute;
      width: 100%;
      right: 2.4rem;
      top: 8rem;
      display: flex;
    }
    
		&__wrapper{
      visibility: hidden;
      opacity: 0;
      overflow: auto;
			padding: 6.8rem 2.5rem;
			position: fixed;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.65);
      transition: .3s ease-in-out;

      @include breakpoint(desktop){
				padding: 0;
      }
      
      &.is-active {
        visibility: visible;
        opacity: 1;
      }
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
        width: 2.4rem;
        height: 2.4rem;
        fill: #c6c6c6;
			}
    }
    
		&--left{
			color: $white;
      padding: 1rem 3.3rem 5.5rem 3.3rem;
      background: url('~static/images/signup-back.png');
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
				width: 41.25%;
				padding: 10.3rem 0 0 7.3rem;
			}
    }
    
		&--right{
			background: white;
      padding: 2.9rem 3.3rem 3.6rem 3.3rem;

      @include breakpoint(desktop){
				width: 59%;
				padding: 8.9rem 10.3rem;
			}
    }
      
    &__field {
      position: relative;

			label{
				text-transform: uppercase;
				@include fontSizeRem(10, 16);
        color: #c6c6c6;
      }
      
			input{
				@include fontSizeRem(12, 22);
				color: black;
				width: 100%;
				border: 0;
				border-bottom: 1px solid #c6c6c6;
				margin-bottom: 2.1rem;
        margin-top: .3rem;
        padding-bottom: .3rem;
        
				@include breakpoint(desktop){
          margin-bottom: 3.7rem;
          margin-top: 1.3rem;
          padding-bottom: 1rem;
				}
      }

      ::placeholder {
        @include fontSizeRem(8, 14);
        color: #c6c6c6;
        opacity: 1;
      }
      :-ms-input-placeholder {
        @include fontSizeRem(8, 14);
        color: #c6c6c6;
      }
      ::-ms-input-placeholder {
        @include fontSizeRem(8, 14);
        color: #c6c6c6;
      }

      .c-login__field-info {
        @include fontSizeRem(10, 12);
        color: #c6c6c6;
        position: absolute;
        top: 4rem;
        left: 0;

        @include breakpoint(desktop){
          top: 7.5rem;
				}
      }
    }
    
		&__title{
      @include fontSizeRem(30, 60);
      @include lineHeightRem(67, 67);
		  margin-bottom: .7rem;
		  position: relative;
      
      @include breakpoint(desktop){
			  margin-bottom: 6.3rem;
			}
		}
		&__txt{
      @include fontSizeRem(12, 22);
      @include lineHeightRem(16, 30);
      position: relative;
      max-width: 75%;

      p {
        margin-bottom: .9rem;
      }

			@include breakpoint(desktop){
        max-width: 85%;
        
			  p {
			  	margin-bottom: 3.5rem;
			  }
			}
    }

    &__logo {
      position: absolute;
      left: 6rem;
      bottom: 8rem;
      width: 12.2rem;
    }
    
    &__check {
      position: absolute;
      top: 1.6rem;
      right: .4rem;

      @include breakpoint(desktop){
        top: 3.7rem;
			}

      &--true {
        fill: #00cb65;
        width: 1.5rem;
        height: 1.2rem;

        @include breakpoint(desktop){
          width: 2.1rem;
          height: 1.6rem;
        }
      }
    }

    &__validation {
      margin-top: -1rem;
      @include fontSizeRem(10, 10);

      @include breakpoint(desktop){
        margin-top: -3rem;
      }

      &--false-msg {
        color: #ea1b1b;
        float: left;
      }
      &--forgot-opt {
        color: $warm-grey;
        text-decoration: underline;
        float: right;
      }
    }

		&__submit{
			display: flex;
      align-items: center;
      margin-top: 2.7rem;
      
			@include breakpoint(desktop){
        color: #c6c6c6;
        margin-top: 7rem;
      }
      
			&--login{
				width: auto;
				margin: 0;
				background:#00cb65;
				text-transform: uppercase;
				@include fontSizeRem(10, 16);
        @include lineHeightRem(12, 30);
				color: white;
				border: 0;
				margin-right: 1.3rem;
        padding: 1rem 3.6rem;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

        &[disabled],
        &[disabled]:hover,
        &[disabled]:active {
          background: #e6e6e6;
          cursor: not-allowed;
        }
        
				@include breakpoint(desktop){
					padding: 1rem 5.5rem;
          margin-right: 2.8rem;
				}
      }

      > span {
        @include fontSizeRem(10, 16);
        color: #c6c6c6;
      }

			&--signup {
        cursor: pointer;
				background: none;
				text-transform: uppercase;
        color: #00cb65;
        font-family: 'Lato-Bold';
				@include fontSizeRem(10, 16);
        margin-left: .2rem;
        
        @include breakpoint(desktop){
					margin-left: .6rem;
				}
			}
		}
	}
</style>
