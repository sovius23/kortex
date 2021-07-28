import graphene

from django.contrib.auth.models import User
from graphene.relay.node import from_global_id
from .models import VisitCard, Project, Photo, Contacts, GeoPos, Block
from graphene_file_upload.scalars import Upload
from .gqlTypes import ProjectType, PhotoType, BlockType
from django.core.files import File

from time import sleep
from django_model_mutations import mutations
from .serializers import BlockSerializer


def getVisit(id:str):
    card = None
    try:
        card = VisitCard.objects.get(
            id=from_global_id(id)[1]
        )
    except:
        card = VisitCard.objects.get(
            verb_id=id
        )
    return card


class AddUserToCard(graphene.Mutation):
    class Arguments:
        token = graphene.String()
        card_id = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, token, card_id):
        card = getVisit(card_id)
        ok = True
        if card.user.count():
            ok = False
        else:
            card.user.set([info.context.user])
        card.save()

        return AddUserToCard(ok=ok)


class AddBlock(graphene.Mutation):
    class Arguments:
        card_id = graphene.ID()
        name = graphene.String()
        descr = graphene.String()
        main_part = graphene.String()

    block = graphene.Field(BlockType)

    @classmethod
    def mutate(cls, root, info, card_id, name, descr, main_part):
        card = VisitCard.objects.get(
            id=from_global_id(card_id)[1]
        )
        block = Block.objects.create(card=card, name=name, descr=descr, main_part=main_part)
        block.save()
        return AddBlock(block=block)


class RemoveBlock(graphene.Mutation):
    class Arguments:
        block_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, block_id):
        Block.objects.get(id=from_global_id(block_id)[1]).delete()
        return RemoveBlock(ok=True)


class ChangeBlock(graphene.Mutation):
    class Arguments:
        block_id = graphene.ID()
        name = graphene.String()
        descr = graphene.String()
        main_part = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, block_id, name, descr, main_part):
        block = Block.objects.get(id=from_global_id(block_id)[1])
        block.name = name
        block.descr = descr
        block.main_part = main_part
        block.save()
        return ChangeBlock(ok=True)


class ChangeBlockDescr(graphene.Mutation):
    class Arguments:
        new_desc = graphene.String()
        card_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, new_desc, card_id):
        card = VisitCard.objects.get(
            id=from_global_id(card_id)[1]
        )
        card.block_descr = new_desc
        card.save()
        return ChangeBlockDescr(ok=True)


class IfUserAdmin(graphene.Mutation):
    class Arguments:
        token = graphene.String()
        card_id = graphene.ID()

    isAdmin = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, token, card_id):
        card = getVisit(card_id)
        ok = False
        if str(info.context.user.visitcard_set.all()[0].id) == str(card.id):
            ok = True
        return IfUserAdmin(isAdmin=ok)


class ChangePassword(graphene.Mutation):
    class Arguments:
        new_password = graphene.String()
        token = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, new_password, token):
        info.context.user.set_password(new_password)
        info.context.user.save()
        return ChangePassword(ok=True)


class UpdateVerbId(graphene.Mutation):
    class Arguments:
        token = graphene.String()
        new_id = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, token, new_id):

        ok = True

        card = info.context.user.visitcard
        card.verb_id = new_id
        try:
            card.save()
        except:
            ok = False
        return UpdateVerbId(ok=ok)


class UpdateFullPhoto(graphene.Mutation):
    class Arguments:
        photo = Upload()
        id = graphene.ID()

    new_url = graphene.String()

    @classmethod
    def mutate(cls, root, info, photo, id):
        card = VisitCard.objects.get(
            id=from_global_id(id)[1]
        )
        url = ""
        if photo.name == "unnamed.u":
            card.full_profile_photo = None
        else:
            card.full_profile_photo = photo

        print(photo, card.full_profile_photo)

        card.save()
        sleep(1)
        if photo.name != "unnamed.u":
            url = VisitCard.objects.get(
            id=from_global_id(id)[1]
        ).full_profile_photo.url

        return UpdateFullPhoto(new_url=url)


class ChangeLogoCord(graphene.Mutation):
    class Arguments:
        x_cord = graphene.Float()
        y_cord = graphene.Float()
        zoom = graphene.Float()
        card_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, x_cord, y_cord, zoom, card_id):
        card = VisitCard.objects.get(
            id=from_global_id(card_id)[1]
        )
        card.x_logo = x_cord
        card.y_logo = y_cord
        card.zoom_logo = zoom
        card.save()


class CreateUser(graphene.Mutation):
    class Arguments:
        username = graphene.String()
        password = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, username, password):
        try:
            User.objects.create_user(username=username, password=password)
        except: return CreateUser(ok=False)
        return CreateUser(ok=True)


class ChangeVisitCardProfile(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        surname = graphene.String()
        midname = graphene.String()
        position_in_company = graphene.String()
        description = graphene.String()
        second_descr = graphene.String()
        visit_card_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, visit_card_id, **kwargs):
        visit_card = VisitCard.objects.filter(id=from_global_id(visit_card_id)[1])
        visit_card.update(
            **kwargs
        )

        return ChangeVisitCardProfile(ok=True)


class ChangeVisitCardProfilePhoto(graphene.Mutation):
    class Arguments:
        photo = Upload()
        visit_card_id = graphene.ID()

    new_path = graphene.String()

    @classmethod
    def mutate(cls, root, info, photo, visit_card_id):
        print("fuck")
        visit_card = VisitCard.objects.get(id=from_global_id(visit_card_id)[1])
        my_photo = File(photo)

        if my_photo.name == "unnamed.u":
            visit_card.ProfilePhoto = None
        else:
            visit_card.ProfilePhoto = File(photo)
        print(photo, "photo")
        visit_card.save()
        return ChangeVisitCardProfilePhoto(new_path=visit_card.ProfilePhoto.url)


class ChangeContacts(graphene.Mutation):
    class Arguments:
        phone = graphene.String()
        website = graphene.String()
        tg_link = graphene.String()
        whatsapp_link = graphene.String()
        inst_link = graphene.String()
        vk_link = graphene.String()
        facebook_link = graphene.String()
        twitter_link = graphene.String()
        contacts_id = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, contacts_id, **kwargs):
        contacts = Contacts.objects.filter(
            id=from_global_id(contacts_id)[1]
        )
        print(kwargs)
        contacts.update(**kwargs)
        return ChangeContacts(ok=True)


class AddProject(graphene.Mutation):
    class Arguments:
        name = graphene.String()
        description = graphene.String()
        link = graphene.String()
        card_id = graphene.ID()

    project = graphene.Field(ProjectType)

    @classmethod
    def mutate(cls, root, info, card_id, **kwargs):
        card = VisitCard.objects.get(
            id=from_global_id(card_id)[1]
        )
        project = Project.objects.create(
            **kwargs, card=card
        )
        return AddProject(project=project)


class RemoveProject(graphene.Mutation):
    class Arguments:
        project_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, project_id):
        Project.objects.get(
            id=from_global_id(project_id)[1]
        ).delete()
        return RemoveProject(ok=True)


class EditProject(graphene.Mutation):
    class Arguments:
        project_id = graphene.ID()
        link = graphene.String()
        name = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, **kwargs):
        prj = Project.objects.get(
            id=from_global_id(kwargs.get("project_id"))[1]
        )
        print(kwargs)
        if len(kwargs.get("link")): prj.link = kwargs.get("link")
        if len(kwargs.get("name")): prj.name = kwargs.get("name")
        prj.save()
        return EditProject(ok=True)


class AddPhoto(graphene.Mutation):
    class Arguments:
        photo = Upload()
        card_id = graphene.ID()

    photo = graphene.Field(PhotoType)

    @classmethod
    def mutate(cls, root, info, photo, card_id):
        card = VisitCard.objects.get(
            id=from_global_id(card_id)[1]
        )
        photo_inst = Photo.objects.create(
            card=card,
            image=photo
        )

        return AddPhoto(photo=photo_inst)


class RemovePhoto(graphene.Mutation):
    class Arguments:
        photo_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, photo_id):
        Photo.objects.get(
            id=from_global_id(photo_id)[1]
        ).delete()
        return RemovePhoto(ok=True)


class ChangeGeopos(graphene.Mutation):
    class Arguments:
        lat = graphene.Float()
        long = graphene.Float()
        card_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, lat, long, card_id):
        geo = VisitCard.objects.get(
            id=from_global_id(card_id)[1]
        ).geopos
        geo.objects.update(
            lattitude=lat,
            longitude=long
        )
        geo.save()
        return ChangeGeopos(ok=True)


class PhotoEdit(graphene.Mutation):
    class Arguments:
        photo_id = graphene.ID()
        new_photo = Upload()

    newImg = graphene.Field(PhotoType)

    @classmethod
    def mutate(cls, root, info, photo_id, new_photo):
        photo = Photo.objects.get(
            id = from_global_id(photo_id)[1]
        )
        photo.image = File(new_photo)
        photo.save()

        return PhotoEdit(newImg=photo)


class SetGeoPos(graphene.Mutation):
    class Arguments:
        geopos_id = graphene.ID()
        lat = graphene.Float()
        long = graphene.Float()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, geopos_id, **kwargs):
        print(kwargs)
        geopos = GeoPos.objects.get(
            id=from_global_id(geopos_id)[1]
        )
        try:
            geopos.lattitude = kwargs.get("lat")
        except: pass

        try:
            geopos.longitude = kwargs.get("long")
        except: pass

        print(geopos.lattitude, geopos.longitude)

        geopos.save()

        return SetGeoPos(ok=True)


class ChangeNames(graphene.Mutation):
    class Arguments:
        geo_name = graphene.String()
        photo_name = graphene.String()
        projects_name = graphene.String()
        card_id = graphene.ID()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, card_id, **kwargs):
        card = VisitCard.objects.get(
            id=from_global_id(card_id)[1]
        )
        try:
            card = VisitCard.objects.get(
                id=from_global_id(card_id)[1]
            )
            card.project_descr = kwargs.get("projects_name")
            card.save()
        except: pass

        try:
            card = VisitCard.objects.get(
                id=from_global_id(card_id)[1]
            )
            card.geo_descr = kwargs.get("geo_name")
            card.save()
        except: pass

        try:
            card = VisitCard.objects.get(
                id=from_global_id(card_id)[1]
            )
            card.photo_descr = kwargs.get("photo_name")
            card.save()
            print(card.photo_descr)
        except: pass


        return ChangeNames(ok=True)


class ChangeTheme(graphene.Mutation):
    class Arguments:
        token = graphene.String()
        theme = graphene.String()

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, theme, token):
        card = info.context.user.visitcard
        print(theme)
        card.theme = theme
        card.save()

        return ChangeTheme(ok=True)

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    change_contacts = ChangeContacts.Field()
    change_visit_card_profile = ChangeVisitCardProfile.Field()
    change_visit_card_profile_photo = ChangeVisitCardProfilePhoto.Field()
    add_project = AddProject.Field()
    remove_project = RemoveProject.Field()
    add_photo = AddPhoto.Field()
    remove_photo = RemovePhoto.Field()
    change_geopos = ChangeGeopos.Field()
    edit_project = EditProject.Field()
    edit_photo = PhotoEdit.Field()
    set_geopos = SetGeoPos.Field()
    change_names = ChangeNames.Field()
    change_theme = ChangeTheme.Field()
    change_full_photo = UpdateFullPhoto.Field()
    change_logo_cords = ChangeLogoCord.Field()
    update_verb_id = UpdateVerbId.Field()
    create_block = AddBlock.Field()
    update_block = ChangeBlock.Field()
    delete_block = RemoveBlock.Field()
    change_block_descr = ChangeBlockDescr.Field()

    is_user_admin = IfUserAdmin.Field()
    change_password = ChangePassword.Field()

    add_user_to_card = AddUserToCard.Field()
