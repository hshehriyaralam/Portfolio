import bcrypt from 'bcrypt'

const password = "Adminsherry943@"; 
hashpassword = ' $2b$10$db41JWBAh4c761Bsfy012OahynzGGr2yF1KVCQZePktINs1aCLw5q'

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error("Hash error:", err);
  } else {
    console.log("Hashed password:\n", hash);
  }
});


