// Mocks generated by Mockito 5.3.1 from annotations
// in easel_flutter/test/widget/save_as_draft_button_test.dart.
// Do not manually edit this file.

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'dart:async' as _i3;

import 'package:media_info/media_info.dart' as _i2;
import 'package:mockito/mockito.dart' as _i1;

// ignore_for_file: type=lint
// ignore_for_file: avoid_redundant_argument_values
// ignore_for_file: avoid_setters_without_getters
// ignore_for_file: comment_references
// ignore_for_file: implementation_imports
// ignore_for_file: invalid_use_of_visible_for_testing_member
// ignore_for_file: prefer_const_constructors
// ignore_for_file: unnecessary_parenthesis
// ignore_for_file: camel_case_types
// ignore_for_file: subtype_of_sealed_class

/// A class which mocks [MediaInfo].
///
/// See the documentation for Mockito's code generation for more information.
class MockMediaInfo extends _i1.Mock implements _i2.MediaInfo {
  @override
  _i3.Future<Map<String, dynamic>> getMediaInfo(String? path) =>
      (super.noSuchMethod(
        Invocation.method(
          #getMediaInfo,
          [path],
        ),
        returnValue:
            _i3.Future<Map<String, dynamic>>.value(<String, dynamic>{}),
        returnValueForMissingStub:
            _i3.Future<Map<String, dynamic>>.value(<String, dynamic>{}),
      ) as _i3.Future<Map<String, dynamic>>);
  @override
  _i3.Future<String> generateThumbnail(
    String? path,
    String? target,
    int? width,
    int? height, {
    int? positionMs = 0,
  }) =>
      (super.noSuchMethod(
        Invocation.method(
          #generateThumbnail,
          [
            path,
            target,
            width,
            height,
          ],
          {#positionMs: positionMs},
        ),
        returnValue: _i3.Future<String>.value(''),
        returnValueForMissingStub: _i3.Future<String>.value(''),
      ) as _i3.Future<String>);
}
