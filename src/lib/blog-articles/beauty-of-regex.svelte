<p>
  One of my biggest pet-peeves in using gov service websites, is the lack of proper
  validation for everyday data we use, like phone numbers or national ID numbers, which in
  many cases can cause drastic outcomes when submitted with a simple typo in a single
  number because the lack of proper validation on the form input.
</p>
<p>
  The easiest and strongest way, is to add a RegEx pattern to the `pattern` attribute of
  the form input. And it is called `RegEx` (or sometimes `RegExp`) as an abbreviation to
  "Regular Expression", which, as the name suggests, simply mean that you write the
  pattern as if you were describing it with "regular" terms.
</p>

<p>
  The Egyptian national ID number, for example, has a pretty recognizable pattern; it is a
  14 digit number, so a simple pattern for that would be <code>{`^\\d{14}$`}</code>, but
  this looks very simple compared to the super-powers that RegEx gives us, it's like
  recruiting the Hulk to open a can of tomato paste. 😅
</p>
<p>
  We could've used other measures to get *almost* the same output, attributes like
  `maxLength` can be set to `14`, and voila, we have almost the same client-side
  validation.
</p>
<p>
  The pattern of the Egyptian Nation ID number does not only have a fixed length, but
  also, some other recognizable, and extractable "segments". These are, from left to
  right:
</p>
<ol>
  <li>
    a single digit denoting the century in which the person's birthdate is ("2" for 1900s,
    or "3" for 2000s).
  </li>
  <li>4 digits for the actual birthdate (as "YY-MM-DD").</li>
  <li>2 digits as a code for the province where the person was born.</li>
  <li>
    4 digits as a serial number for the person in the registry, of which is a number
    signifying the gender of the person.
  </li>
  <li>a single "checksum" digit.</li>
</ol>

<p>
  So, this shape can roughly be translated in RegEx to: <code
    >{`^[23]\\d{2}[01]\\d[0-3]\\d{8}$`}</code
  >, which, you can read as:
</p>

<ul>
  <li>starts with either "2" or "3", then..</li>
  <li>2 numbers, then..</li>
  <li>either "0" or "1" (the tens place for the month), then..</li>
  <li>a single number (the ones place for the month), then..</li>
  <li>a number between "0" and "3", inclusive (the tens place for the day). then..</li>
  <li>ends with a set of 8 numbers.</li>
</ul>

<p>
  And this, although a bit weak, is way better than just relying on validation with only
  the length of the input. And I'm saying it's weak, because it allows for fake input,
  like, including a province code that is not defined, or a birthdate that is wrong by
  definition, like "88-02-30", which can cause your application to crash if you rely on
  the date in the ID number to calculate the person's age for example, and you didn't
  handle the verification case ahead.
</p>
<p>
  And, speaking of handling errors, from a security point of view, you must make account
  for ReDoS attacks if you were to use RegEx validation server-side as well. Which is
  pretty doable give the amount of libraries that can help mitigate this kind of attacks,
  or DX tools like an `eslint` extension.
</p>

<h2>Ok then, How to achieve the highest precision with our National ID example?</h2>
<p>
  Well, you can be as strict as you can be in "describing" your RegEx. I usually use a
  more strict pattern that guarantees at least 13 digits (of the 14) verification with
  highest precision.
</p>

<code
  >{`^[23]\\d{2}((0[1-9])|(1[0-2])((0[1-9])|([12][0-9])|(3[01])))((0[1-4])|([12][1-9])|(3[1-5])|88)\\d{3}\\d{2}$`}</code>

<h3>Ok, but what do we do for the last digit?</h3>
<p>Well, this should be a story for another time, but let's just cut to the chase.</p>
<p>
  The last digit is what is called a "checksum", which as the name suggest, it's the
  "digest" of all the previous digits. Every time you put the same 13 digits to the same
  formula, it should give you back the same number. It's kind of like a hash function if
  you're familiar with the concept.
</p>
<p>
  Calculating checksums usually is carried-out by special formulae, and in our case, I
  couldn't find any documentation on which formula has been used to calculate the
  checksum. But with a little research on checksum algorithms in similar ID numbers, and
  with some tests I found out it is a `modulo 11` algorithm, which, upon further
  investigation, found to have a little tweak, when the output is "0" it is substituted
  for "1".
</p>

<h2>Outro</h2>
<p>
  You really don't have to add the final comprehensive validation technique, and certainly
  you can achieve good enough results with mere Regex patterns (13 out of 14 numbers is
  pretty good, it is 92% accuracy). Although, this heavily depends on your use case.
</p>

<p>
  If you want to practice the knowledge you got out of this article, there is a tool I
  made to do just that, <a href="https://habumustafa.github.io/national-id-check/"
    >check the validity of Egyptian National ID numbers</a
  >. Just type in the number, and it will break it down for you so you can recognize the
  pattern. And in there, you can find a link to the actual code for the RegEx I used, and
  the checksum calculation function.
</p>
