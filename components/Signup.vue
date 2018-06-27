<template>
	<div class="c-signup__wrapper">
    <div class="c-signup__inner-wrapper">
      <div class="c-signup">
        <div class="c-signup__close" @click="deactivateSignup">
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
        <div class="c-signup--left">
          <h2 class="c-signup__title">
            Sign Up
          </h2>
          <div class="c-signup__txt">
            <p>Drive my Business is much better when you have an account.</p>
            <p><em>Get yourself one.</em></p>
          </div>
          <div class="c-signup__logo u-only-desktop">
            <img src="~static/images/logo.png" alt="logo">
          </div>
        </div>
        <div class="c-signup--right">
          <form action="">
            <div class="c-signup__field c-signup__field--username">
              <label for="username">username</label>
              <input type="text" name='username' placeholder="enter username" v-model="username" @blur="$v.username.$touch()">
              <span class="c-signup__field-info">min. 3 characters</span>
              <div class="c-signup__validation-msg">
                <div v-if="!$v.username.$error && !$v.username.$invalid" class="c-signup__check c-signup__check--true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                    <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                  </svg>
                </div>
                <div class="c-signup__check c-signup__check--false">
                  <span v-if="$v.username.$error">must have min. 3 characters</span>
                  <!-- <span v-if="serverError.username">username already exists</span> -->
                </div>
              </div>
            </div>
            <div class="c-signup__field c-signup__field--email">
              <label for="email">e-mail</label>
              <input type="text" name='email' placeholder="enter email" v-model="email" @blur="$v.email.$touch()">
              <div class="c-signup__validation-msg">
                <div v-if="!$v.email.$error && !$v.email.$invalid" class="c-signup__check c-signup__check--true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                    <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                  </svg>
                </div>
                <div class="c-signup__check c-signup__check--false">
                  <span v-if="$v.email.$error">invalid e-mail</span>
                  <!-- <span v-if="serverError.email">email already exists</span> -->
                </div>
              </div>
            </div>
            <div class="c-signup__field c-signup__field--password">
              <label for="password">password</label>
              <input type="password" name='password' placeholder="enter password" v-model="password" @blur="$v.password.$touch()">
              <span class="c-signup__field-info">min. 8 characters</span>
              <div class="c-signup__validation-msg">
                <div v-if="!$v.password.$error && !$v.password.$invalid" class="c-signup__check c-signup__check--true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                    <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                  </svg>
                </div>
                <div class="c-signup__check c-signup__check--false">
                  <span v-if="$v.password.$error">must have min. 8 characters</span>
                </div>
              </div>
            </div>
            <div class="c-signup__field c-signup__field--confirm-password">
              <label for="cpassword">confirm password</label>
              <input type="password" name='cpassword' placeholder="enter password" v-model="confirmPassword" @blur="$v.confirmPassword.$touch()">
              <div class="c-signup__validation-msg">
                <div v-if="!$v.confirmPassword.$error && !$v.confirmPassword.$invalid" class="c-signup__check c-signup__check--true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.155 12.3">
                    <path id="check" d="M5.14 63.28l-3.855-3.855L0 60.71l5.14 5.14 11.015-11.015-1.285-1.285z" class="cls-1" transform="translate(0 -53.55)"/>
                  </svg>
                </div>
                <div class="c-signup__check c-signup__check--false">
                  <span v-if="$v.confirmPassword.$error">password does not match</span>
                </div>
              </div>
            </div>
            <div class="c-signup__terms">
              <input type="checkbox" name="terms" v-model="terms" class="checkbox-button__input">
              <span class="checkbox-button__control"></span>
              <label for="terms">By singing up I agree with <span>terms and conditions</span>.</label>	
            </div>
            <div class="c-signup__submit">
              <button class='c-signup__submit--signup' type="submit" :class="{'is-disabled': $v.$invalid}" :disabled="$v.$invalid">sign up</button>
              <span>or</span>
              <div class='c-signup__submit--login' @click="activateLogin">log in</div>
            </div>				
          </form>
        </div>
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
      minLen: minLength(8)
    },
    confirmPassword: {
      required,
      minLen: minLength(8),
      sameAs: sameAs('password')
    },
    terms: {
      required,
      sameAs: sameAs('termsValid')
    }
  },
  methods: {
    deactivateSignup() {
      this.$emit('deactivateSignup');
    },
    activateLogin() {
      this.$emit('activateLogin');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/settings';

	.c-signup {
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
      overflow: auto;
			padding: 6.8rem 2.5rem;
			position: fixed;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.65);

      @include breakpoint(desktop){
				padding: 0;
      }
    }

    &__inner-wrapper {
      @include breakpoint(desktop){
				position: relative;
        max-width: 1440px;
        margin: 0 auto;
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
      padding: 1rem 3.3rem 1.4rem 3.3rem;
      background: url('~static/images/signup-back.jpg');
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
      padding: 4rem 3.3rem 4rem 3.3rem;

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
        color: #c6c6c6;
      }
      
			input{
				@include fontSizeRem(12, 22);
				color: black;
				width: 100%;
				border: 0;
				border-bottom: 1px solid #c6c6c6;
				margin-bottom: 2.9rem;
        margin-top: .4rem;
        padding-bottom: .4rem;
        
				@include breakpoint(desktop){
          margin-bottom: 4.6rem;
          margin-top: 1.5rem;
          padding-bottom: 0.8rem;
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

      .c-signup__field-info {
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
			  margin-bottom: 7.8rem;
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
      bottom: 6rem;
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

      &--false {
        span {
          @include fontSizeRem(10, 10);
          color: #ea1b1b;
          display: inline-block;
          padding-top: .2rem;

          @include breakpoint(desktop){
            padding-top: .7rem;
          }
        }
      }
    }

		&__terms{
      @include fontSizeRem(10, 16);
      color: #c6c6c6;
      position: relative;
			display: flex;
			align-items: center;
      margin-bottom: 1.7rem;

      @include breakpoint(desktop){
        margin-top: 1.8rem;
        margin-bottom: 2.5rem;
			}
      
			.checkbox-button__input {
        cursor: pointer;
        z-index: 1;
        opacity: 0;
        position: absolute;
        left: 2px;
        width: 16px;
        height: 16px;
      }

      .checkbox-button__control {
        position: relative;
        display: inline-block;
        width: 23px;
        height: 23px;
        margin-right: .5rem;
        vertical-align: middle;
        background-color: $white;
        color: #00cb65;
        border: 1px solid #c6c6c6;

        @include breakpoint(desktop){
          width: 27px;
          height: 27px;
          margin-right: 1rem;
        }
      }

      .checkbox-button__input:checked+.checkbox-button__control:after {
        content: "";
        display: block;
        position: absolute;
        top: 3px;
        left: 3px;
        width: 15px;
        height: 15px;
        background-color: #00cb65;

        @include breakpoint(desktop){
          top: 4px;
          left: 4px;
          width: 17px;
          height: 17px;
        }
      }

      .checkbox-button__control {
        transform: scale(0.75);
      }
      
			label{
        text-transform: none;
        
        span {
          cursor: pointer;
          color: #00cb65;
        }
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
        @include lineHeightRem(12, 30);
				color: white;
				border: 0;
				margin-right: 1.3rem;
        padding: 1rem 3.2rem;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

        &[disabled],
        &[disabled]:hover,
        &[disabled]:active {
          background: #e6e6e6;
          cursor: not-allowed;
        }
        
				@include breakpoint(desktop){
					padding: 1rem 5.1rem;
          margin-right: 2.8rem;
				}
      }

      > span {
        @include fontSizeRem(10, 16);
        color: #c6c6c6;
      }

			&--login {
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
