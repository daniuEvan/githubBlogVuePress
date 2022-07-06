#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# date: 2022/5/23
# desc: ...
import os

# note_dir = '/Users/liusaisai/my_note'
# note_dir = '/Users/liusaisai/githubBlog/content/posts'
# note_dir = '/Users/liusaisai/githubBlogVuePress/docs'
note_dir = '/Users/liusaisai/githubBlogVuePress/docs/06.容器相关/02.k8s'


# note_dir = '/Users/liusaisai/my_note/数据库/redis'


# note_dir = '/Users/liusaisai/my_note/数据库/mysql'

def node_find():
    for base_dir, dirs, files in os.walk(note_dir):
        # if not base_dir.startswith(f'{note_dir}/0'):
        #     continue
        # if base_dir.startswith(f'{note_dir}/00'):
        #     continue
        for file_name in files:
            print(file_name)
            if ".md" not in file_name:
                print("----------------" + file_name)
                continue
            files_abs_path = os.path.join(base_dir, file_name)
            fr = open(files_abs_path, 'r', encoding='utf8')
            msg = fr.read()
            msg = msg.replace("""tags:""", """tags:\n  - k8s""")
            fr.close()
            fw = open(files_abs_path, 'w', encoding='utf8')
            fw.write(msg)
            fw.close()


node_find()
