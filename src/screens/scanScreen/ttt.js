// const resizedPhoto = {
    //   uri: `file://${photo.path}`,
    // };
    // const result = await fetch(`file://${photo.path}`);
    // const data = await result.blob();
    // setImage(resizedPhoto.uri);

    // Tesseract.recognize(resizedPhoto.uri, 'eng', {
    //   logger: info => console.log(info),
    // })
    //   .then(data => {
    //     console.log('🚀 ~ file: App.tsx:94 ~ takePhonto ~ data:', data);
    //     // يمكنك استخدام النص الذي تم استخراجه هنا في تطبيق React Native الخاص بك.
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // RNFS.readFile(resizedPhoto.uri, 'base64')
    //   .then(res => {
    //     callGoogleVisionAsync(res)
    //       .then(data => {
    //         var text = '';
    //         var locale = null;
    //         // data.responses.forEach(response => {
    //         //   response.textAnnotations.forEach(textAnnotation => {
    //         //     text = text + ' ' + textAnnotation.description;
    //         //     if (locale === null) {
    //         //       locale = textAnnotation.locale;
    //         //     }
    //         //   });
    //         // });

    //         console.log(
    //           '🚀 ~ file: App.tsx:45 ~ onRecognizeText ~ text:',
    //           data.responses[0].fullTextAnnotation,
    //         );
    //         console.log('------------------');
    //         console.log(
    //           '🚀 ~ file: App.tsx:45 ~ onRecognizeText ~ text:',
    //           data.responses[0].textAnnotations,
    //         );
    //       })
    //       .catch(error => {
    //         console.log(
    //           '🚀 ~ file: App.tsx:85 ~ callGoogleVisionAsync ~ error:',
    //           error,
    //         );
    //       });
    //   })
    //   .catch(error => {
    //     console.log(
    //       '🚀 ~ file: App.tsx:85 ~ callGoogleVisionAsync ~ error:',
    //       error,
    //     );
    //   });

    // onRecognizeText();
    // performOCR();
    // console.log('🚀 ~ file: App.tsx:41 ~ takePhonto ~ data:', data);
};

// const performOCR = async () => {
//   const {data} = await TesseractOcr.recognize(
//     image, // استبدل بمسار الصورة الخاصة بك
//     LANG_ENGLISH, // اختيار اللغة (مثلاً: LANG_ENGLISH)
//     {
//       whitelist:
//         'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', // محارف يتم قبولها
//       blacklist: '!@#$%^&*()_+{}:"<>?,./;\'[]\\`~|', // محارف تتم استبعادها
//     },
//   );
//   console.log('OCR Result:', data);
// };
