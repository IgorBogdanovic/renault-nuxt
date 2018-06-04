<template>
	<div class="c-login__wrapper" v-if=visible>
		<div class="c-login">
			<div class="c-login__close" @click="closeLogin"><img src="~/static/images/close.png" alt=""></div>
			<div class="c-login--left" :style="{ 'background': 'url('+background+') ' }">
				<h2 class="c-login__title">
					Sign Up
				</h2>
				<div class="c-login__txt" v-html="signupText"></div>
			</div>
			<div class="c-login--right">
				<form action="">
					<label for="username">username</label>
					<input type="text" name='username'>
					<label for="email">e-mail</label>
					<input type="email" name='email'>
					<label for="password">password</label>
					<input type="password" name='password'>
					<label for="cpassword">confirm password</label>
					<input type="password" name='cpassword'>
					<div class="c-login__terms">
						<input type="checkbox" name="terms"><label for="terms" v-html="termsText"></label>	
					</div>
					<div class="c-login__submit">
						<input type="submit" value="sign up">
						<span>or</span>
						<button class='c-login__submit--login'>log in</button>
					</div>				
				</form>
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				visible: true,
				background: require(`@/static/images/login-back.png`),
				signupText: '<p>Drive my Business is much better when you have an account.</p><p><em>Get yourself one.</em></p>',
				termsText: 'By singing up I agree with <span>terms and conditions.</span>'
			}
		},
		methods:{
			closeLogin(){
				this.visible = false
			}			
		}
	}
</script>

<style lang="scss">
	@import '~assets/scss/settings';
	.c-login{
		position: relative;
		@include breakpoint(desktop){
			max-width: 79%;
			position: absolute;
    		width: 100%;
    		right: 20px;
    		top: 20px;
    		display: flex;
		}
		&__wrapper{
			padding: 25px;
			position: fixed;
		    height: 100%;
		    width: 100%;
		    background: rgba(0, 0, 0, 0.65);
		}
		&__close{
			position: absolute;
		    right: 7px;
		    top: 9px;
			color: #ffffff;
			z-index: 1;
			cursor: pointer;
			@include breakpoint(desktop){
				right: 32px;
			    top: 33px;
			}
		}
		&--left{
			color: #ffffff;
			padding: 1rem 3.3rem 1.4rem 3.3rem;
			background-size: cover;
			background-position: center;
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
			label{
				text-transform: uppercase;
				font-size: 10px;
				color: #c6c6c6;
				@include breakpoint(desktop){
  					font-size: 16px;
				}
			}
			input{
				font-size: 12px;
				color: black;
				width: 100%;
				border: 0;
				border-bottom: 1px solid #c6c6c6;
				margin-bottom: 22px;
				margin-top: 4px;
				@include breakpoint(desktop){
  					font-size: 22px;
  					margin-bottom: 3.7rem;
				    margin-top: 1.4rem;
				    padding-bottom: 0.8rem;
				}
			}
			@include breakpoint(desktop){
				width: 59%;
				padding: 8.7rem 10.3rem;
			}
		}
		&__title{
		  font-size: 30px;
		  line-height: 2.23;
		  margin-bottom: 9px;
		  position: relative;
			@include breakpoint(desktop){
			  font-size: 60px;
			  margin-bottom: 4.3rem;
			}
		}
		&__txt{
			font-size: 12px;
		    position: relative;
		    max-width: 75%;
		    line-height: 1.33;
		    p{
		    	margin-bottom: 10px;
		    }
			@include breakpoint(desktop){
			  font-size: 22px;
			  line-height: 1.36;
			  p{
			  	margin-bottom: 3.5rem;
			  }
			}
		}
		&__terms{
			font-size: 10px;
			color: #c6c6c6;
			display: flex;
			align-items: center;
			margin: 5rem 0 2.2rem 0;
			input{
				width: auto;
				margin: 0;				
				margin-right: 8px;
			}
			label{
			    text-transform: none;				
			}
		}
		&__submit{
			display: flex;
			align-items: center;
			@include breakpoint(desktop){
			  font-size: 16px;
			  color: #c6c6c6;
			}
			input{
				width: auto;
				margin: 0;
				background:#00cb65;
				text-transform: uppercase;
				font-weight: bold;
				font-size: 10px;
				color: white;
				border: 0;
				margin-right: 13px;
				padding: 10px 32px;
				@include breakpoint(desktop){
					font-size: 16px;
					padding: 16px 51px;
					margin-right: 28px;
				}
			}
			&--login{
				background: none;
				text-transform: uppercase;
				color: #00cb65;
				font-size: 10px;
				margin-left: 2px;
				@include breakpoint(desktop){
					font-size: 16px;
				}
			}
		}
	}
</style>