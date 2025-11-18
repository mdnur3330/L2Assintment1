What is the use of the keyof keyword in TypeScript? (with Example)

TypeScript-এ keyof একটি বিশেষ অপারেটর যা কোনো object type-এর সবগুলো property name-এর union type তৈরি করে।
অর্থাৎ, আপনি যদি একটি interface বা type-এর উপর keyof ব্যবহার করেন, তাহলে সেই অবজেক্টের সব key একটি টাইপ হিসেবে পাওয়া যাবে।

এটি মূলত type safety, valid key checking, এবং dynamic object key access–এর জন্য ব্যবহৃত হয়।
Why is keyof useful?

অবজেক্ট থেকে ভুল key নেওয়া প্রতিরোধ করে
টাইপ সেফ ফাংশন তৈরি করতে সাহায্য করে

Dynamic কিন্তু নিরাপদ object access করতে দেয়
Object-এর key-গুলোকে type হিসেবে ব্যবহার করা যায়

Example: Using keyof
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

keyof User → "name" | "age" | "isAdmin"
type UserKeys = keyof User;

function getUserValue(obj: User, key: UserKeys) {
  return obj[key];
}

const user: User = {
  name: "Nur Alom",
  age: 22,
  isAdmin: false,
};














What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

TypeScript-এ enum (Enumeration) হলো একটি বিশেষ টাইপ, যা একটি নির্দিষ্ট সেটের স্থির মান (fixed values) সহজে ব্যবস্থাপনার জন্য ব্যবহার করা হয়। এটি মূলত readability, maintainability এবং ভুল কমানোর জন্য খুবই উপকারী।

Enums ব্যবহারের মূল উদ্দেশ্য হলো —
related constants গুলোকে একটি দলে সংগঠিত করা
নাম ব্যবহার করে মান (value) অ্যাক্সেস করা
কোডকে আরও পরিষ্কার ও বোধগম্য করা

Why do we use enums?
কোডে magic number/string ব্যবহার না করে পরিষ্কারভাবে নাম দিয়ে অপশন নির্ধারণ করা যায়
ভুল মান লিখে ফেলার সম্ভাবনা কমে

Condition এবং switch-case লেখা সহজ হয়
Role, Status, Category, Permission ইত্যাদি fixed মান প্রকাশে দারুণ কাজে লাগে


Enum Example
String enum-এ প্রতিটি মানকে মানুষের পড়ার উপযোগী string হিসেবে রাখা হয়।
এটি বেশি readable এবং debugging-এর জন্য ভালো।

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
