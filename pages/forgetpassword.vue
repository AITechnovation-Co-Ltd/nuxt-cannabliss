<template>
    <div class="w-full sm:w-10/12 md:w-8/12 flex flex-col items-center justify-center px-0 xl:px-4 py-8 glass">
        <div class="md:w-4/5 w-11/12 bg-primary rounded-lg pb-5 flex flex-col items-center drop-shadow-md">
            <h1 class="lg:text-4xl text-center text-4xl text-white py-5">Forgot password</h1>
            <hr class="border-white w-11/12">
            <div class="w-full flex flex-col justify-center py-5">
                <form @submit.prevent="checkData(form)" class="mx-5 md:mx-10 grid grid-cols-2 gap-2">
                    <div class="w-full col-span-1">
                        <p class="text-white text-lg font-light">E-mail<span class="text-red-500">
                                *</span></p>
                        <base-input name="email" type="email" v-model="form.email" placeholder="E-mail"
                            innerClass="rounded-full text-md py-3 drop-shadow-md" />
                    </div>
                    <div class="w-full col-span-1">
                        <p class="text-white text-lg font-light">Phone Number<span class="text-red-500">
                                *</span></p>
                        <base-input name="phone" type="phone" v-model="form.phone" placeholder="Phone Number"
                            innerClass="rounded-full text-md py-3 drop-shadow-md" />
                    </div>
                    <div class="w-full col-span-2">
                        <p class="text-white text-lg font-light">Password<span class="text-red-500">
                                *</span></p>
                        <base-input name="password" type="password" v-model="form.password" placeholder="Password"
                            innerClass="rounded-full text-md py-3 drop-shadow-md" />
                    </div>
                    <div class="w-full col-span-2">
                        <p class="text-white text-lg font-light">Confirm Password<span class="text-red-500">
                                *</span></p>
                        <base-input name="checkpassword" type="password" v-model="confirmpassword"
                            placeholder="Confirm Password" innerClass="rounded-full text-md py-3 drop-shadow-md" />
                    </div>
                    <div class="col-span-2 w-full mt-8 flex flex-col items-center">
                        <button type="submit" class="py-3 px-8 rounded-full bg-secondary text-black drop-shadow-md"
                            :disabled="false">
                            Reset Password</button>
                        <nuxt-link class="text-white mt-4 text-sm font-light underline" to="/">Back to homepage
                        </nuxt-link>
                    </div>
                </form>
            </div>
        </div>
        <dialog-register ref="alertSubmit" type="confirm" />
    </div>
</template>

<script>
import dialogRegister from "~/components/layout/dialog-register.vue";
export default {
    layout: 'auth',
    components: { dialogRegister },
    data() {
        return {
            form: {
                email: '',
                phone: '',
                password: '',
            },
            confirmpassword:''
        }
    },
    methods: {
        async checkData(form) {
            const self = this;
            let error = self.validateForm()
            if (error) {
                self.$toast.open({
                    message: error,
                    type: "error",
                    duration: 5000,
                });
                return
            }
            self.$refs.alertSubmit.show(
                `Do you want to change your password?`,
                "",
                // async function () {
                // await self.registerClick();
                // }
            );
            //   self.$store.dispatch("loading/setLoading", true);
            // await self.$api
            //     .patientResetPassword(form)
            //     .then(async () => {
            //       self.$toast.open({
            //         message: "เปลี่ยนรผัสผ่านสำเร็จ",
            //         type: "success",
            //         duration: 5000,
            //       });
            //       self.$router.push("/users/login");
            //     })
            //     .catch(async (error) => {
            //         self.$toast.open({
            //             message: error.response.data.message,
            //             type: "error",
            //             duration: 5000,
            //         });
            //     });
            //   self.$store.dispatch("loading/setLoading", false);
        },
        validateForm() {
            const self = this;
            let error = ''

            if (!self.form.email) error = "Please enter your email";
            else if (!self.form.phone) error = "Please enter your phone number";
            else if (self.form.phone.length != 10) error = "Please enter your phone number 10 digits";
            else if (!self.form.password) error = "Please enter your password";
            else if (self.form.password.search(/[a-z]/i) < 0) error = "Password must contain lowercase letter";
            else if (self.form.password.search(/[A-Z]/) < 0) error = "Password must contain capital letter";
            else if (self.form.password.search(/[0-9]/) < 0) error = "Password must contain number";
            else if (!/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/.test(self.form.password)) error = "Password must contain special character";
            else if (self.form.password.length < 7) error = "Password must be at least 8 character";
            else if (self.form.password != self.confirmpassword) error = "Please enter the same password";
            else error = "";

            return error
        }
    }
}
</script>
